"use client";

import {
	ConfirmPasswordIconAuth,
	EmailIconAuth,
	MobileNumberIconAuth,
	PasswordIconAuth,
	UserIconAuth,
} from "@/assets/SVG/auth/registry-login";
import { EyeIcon, EyeOffIcon } from "@/assets/SVG/auth/show-hide-password-icon";
import Link from "next/link";
import { useState } from "react";
import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import SectionTitle from "../base/section-title";

// تعریف اینترفیس Props به صورت Generic برای پشتیبانی از هر نوع داده ورودی فرم
interface AuthFormProps<TFieldValues extends FieldValues> {
	formType: "registry" | "login";
	onSubmit: (data: TFieldValues) => Promise<void>;
	register: UseFormRegister<TFieldValues>;
	handleSubmit: UseFormHandleSubmit<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
	isSubmitting: boolean;
}

export default function AuthForm<TFieldValues extends FieldValues>({
	formType,
	onSubmit,
	register,
	handleSubmit,
	errors,
	isSubmitting,
}: AuthFormProps<TFieldValues>) {
	const [toggle, setToggle] = useState(false);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col justify-center w-full gap-4"
		>
			<SectionTitle
				title={formType === "registry" ? "ایجاد حساب کاربری" : "ورود به حساب"}
			/>

			{formType === "registry" && (
				<div className="min-h-15 md:min-w-100 space-y-1 relative">
					<span className="absolute top-9 right-2 text-gray-700">
						<UserIconAuth />
					</span>
					<label className="text-[12px]">نام و نام خانوادگی</label>
					<input
						{...register("name" as Path<TFieldValues>)}
						placeholder="نام و نام خانوادگی"
						className="w-full p-3 border border-black/60 rounded-sm text-[12px] outline-0 px-7 bg-white"
					/>
					{errors.name && (
						<p className="text-red-500 text-[10px]">
							{errors.name.message as string}
						</p>
					)}
				</div>
			)}

			<div className="min-h-15 md:min-w-100 space-y-1 relative">
				<span className="absolute top-9 right-2 text-gray-700">
					<EmailIconAuth />
				</span>
				<label className="text-[12px]">ایمیل</label>
				<input
					{...register("email" as Path<TFieldValues>)}
					type="email"
					placeholder="ایمیل"
					className="w-full p-3 border border-black/60 rounded-sm text-[12px] outline-0 px-7 bg-white"
				/>
				{errors.email && (
					<p className="text-red-500 text-[10px]">
						{errors.email.message as string}
					</p>
				)}
			</div>

			{formType === "registry" && (
				<div className="min-h-15 md:min-w-100 space-y-1 relative">
					<span className="absolute top-9 right-2 text-gray-700">
						<MobileNumberIconAuth />
					</span>
					<label className="text-[12px]">شماره موبایل</label>
					<input
						{...register("phone" as Path<TFieldValues>)}
						placeholder="شماره موبایل"
						className="w-full p-3 border border-black/60 rounded-sm text-[12px] outline-0 px-7 bg-white"
					/>
					{errors.phone && (
						<p className="text-red-500 text-[10px]">
							{errors.phone.message as string}
						</p>
					)}
				</div>
			)}

			<div className="min-h-15 md:min-w-100 space-y-1 relative">
				<div className="absolute top-9 left-3">
					<div onClick={() => setToggle(!toggle)}>
						{toggle ? <EyeOffIcon /> : <EyeIcon />}
					</div>
				</div>
				<span className="absolute top-9 right-2 text-gray-700">
					<PasswordIconAuth />
				</span>
				<label className="text-[12px]">رمز عبور</label>
				<input
					{...register("password" as Path<TFieldValues>)}
					type={toggle ? "text" : "password"}
					placeholder="رمز عبور"
					className="w-full p-3 border border-black/60 rounded-sm text-[12px] outline-0 px-7 bg-white"
				/>
				{errors.password && (
					<p className="text-red-500 text-[10px]">
						{errors.password.message as string}
					</p>
				)}
			</div>

			{formType === "registry" && (
				<div className="min-h-15 md:min-w-100 space-y-1 relative">
					<div className="absolute top-9 left-3">
						<div onClick={() => setToggle(!toggle)}>
							{toggle ? <EyeOffIcon /> : <EyeIcon />}
						</div>
					</div>
					<span className="absolute top-9 right-2 text-gray-700">
						<ConfirmPasswordIconAuth />
					</span>
					<label className="text-[12px]">تأیید رمز عبور</label>
					<input
						{...register("confirmPassword" as Path<TFieldValues>)}
						type={toggle ? "text" : "password"}
						placeholder="تأیید رمز عبور"
						className="w-full p-3 border border-black/60 rounded-sm text-[12px] outline-0 px-7 bg-white"
					/>
					{errors.confirmPassword && (
						<p className="text-red-500 text-[10px]">
							{errors.confirmPassword.message as string}
						</p>
					)}
				</div>
			)}

			<button
				type="submit"
				disabled={isSubmitting}
				className="bg-(--color-gold) text-black text-[12px] p-2 rounded font-bold cursor-pointer disabled:opacity-50"
			>
				{isSubmitting
					? "در حال ارسال..."
					: formType === "registry"
					? "ایجاد حساب کاربری"
					: "ورود به حساب کاربری"}
			</button>

			<p className="w-full text-center text-[12px] mt-2">
				{formType === "registry" ? (
					<>
						قبلاً ثبت نام کرده‌اید؟{" "}
						<Link
							href="/auth/login"
							className="text-green-600 font-bold hover:underline"
						>
							ورود
						</Link>
					</>
				) : (
					<>
						هنوز ثبت نام نکرده‌اید؟{" "}
						<Link
							href="/auth/registry"
							className="text-green-600 font-bold hover:underline"
						>
							ثبت نام
						</Link>
					</>
				)}
			</p>
		</form>
	);
}

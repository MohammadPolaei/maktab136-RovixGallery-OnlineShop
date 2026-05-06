"use client";

import InputValidationError from "@/components/base/input-validation-error";
import { PasswordInput, TextInput } from "@/components/base/inputs";
import ValidatedForm from "@/components/shared/validated-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AdminLoginFormData, adminLoginSchema } from "../../utils";

export default function LoginForm() {
	const [loading, setLoading] = useState(false);
	const [serverError, setServerError] = useState<string | null>(null);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AdminLoginFormData>({
		resolver: zodResolver(adminLoginSchema),
	});

	const onSubmit = async (data: AdminLoginFormData) => {
		setServerError(null);
		setLoading(true);
		console.log(data);

		try {
			const res = await axios.post(
				"/api/auth/login", // مسیر API Route خودت
				data,
				{
					withCredentials: true, // برای احتیاط وقتی کوکی ها ست می شوند
				}
			);

			if (res.data?.success) {
				// بعد از لاگین موفق
				// اگر لاگین یک‌طرفه است (کاربر نباید به فرم برگردد):
				router.replace("/"); // یا "/" بسته به نیازت
				router.refresh(); // برای sync شدن سرور/کلاینت با کوکی‌های جدید
			}
		} catch (err) {
			const error = err as AxiosError<{ message?: string }>;
			if (error.response?.status === 401) {
				setServerError(
					error.response.data?.message ?? "نام کاربری یا رمز عبور اشتباه است"
				);
			} else {
				setServerError("خطایی در سرور رخ داده است. لطفا دوباره تلاش کنید.");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<ValidatedForm
			formDescription="خوش آمدید . لطفا برای ادامه وارد شوید"
			formTitle="ورود به پنل ادمین"
			handleSubmit={handleSubmit}
			loading={loading}
			onSubmit={onSubmit}
		>
			<div className="w-full relative">
				<TextInput
					label="ایمیل"
					name="email" // مهم: با فیلد فرم هماهنگ باشد
					register={{ ...register("email") }}
					placeholder="ایمیل خود را وارد کنید"
				/>
				{errors.email && (
					<InputValidationError>{errors.email.message}</InputValidationError>
				)}
			</div>

			<div className="w-full relative">
				<PasswordInput
					label="کلمه عبور"
					name="password"
					register={{ ...register("password") }}
					placeholder="کلمه عبور را وارد کنید"
				/>
				{errors.password && (
					<InputValidationError>{errors.password.message}</InputValidationError>
				)}
			</div>

			{serverError && (
				<p className="text-sm text-red-500 mt-2">{serverError}</p>
			)}
		</ValidatedForm>
	);
}

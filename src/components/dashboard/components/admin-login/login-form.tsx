"use client";
import SubmitButton from "@/shared/components/base/buttons";
import { PasswordInput, TextInput } from "@/shared/components/base/inputs";
import FormContainer from "@/shared/components/form-container";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AdminLoginFormData, adminLoginSchema } from "../../utils";

export default function LoginForm() {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AdminLoginFormData>({
		resolver: zodResolver(adminLoginSchema),
	});
	const onSubmit = (data: AdminLoginFormData) => {
		console.log(data);
		setLoading(true);
	};
	return (
		<FormContainer>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full flex flex-col justify-evenly items-center gap-3"
			>
				<h1 className="text-xl text-(--color-dark-green) font-bold">
					ورود به پنل ادمین
				</h1>
				<p className="text-sm text-(--color-subheading) hidden sm:inline">
					خوش آمدید . لطفا برای ادامه وارد شوید
				</p>
				<TextInput
					label="ایمیل"
					name="username"
					register={{ ...register("email") }}
					placeholder="ایمیل خود را وارد کنید"
				/>
				{errors.email && (
					<p className="text-red-500 text-sm">{errors.email.message}</p>
				)}
				<PasswordInput
					label="کلمه عبور"
					name="password"
					register={{ ...register("password") }}
					placeholder="کلمه عبور را وارد کنید"
				/>
				{errors.password && (
					<p className="text-red-500 text-sm">{errors.password.message}</p>
				)}
				<SubmitButton disabaled={loading}>
					{loading ? "در حال بررسی . . ." : "ورود به حساب کاربری"}
				</SubmitButton>
			</form>
		</FormContainer>
	);
}

"use client";

import EmailIcon from "@/assets/SVG/auth/email-icon";
import PasswordIcon from "@/assets/SVG/auth/password-icon";
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
			const res = await axios.post("/api/auth/admin-login", data, {
				withCredentials: true,
			});

			if (res.data?.success) {
				router.replace("/dashboard");
				router.refresh();
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
				<EmailIcon className="absolute top-9 right-1 text-black/50" />
				<TextInput
					label="ایمیل"
					name="email"
					register={{ ...register("email") }}
					placeholder="ایمیل خود را وارد کنید"
				/>
				{errors.email && (
					<InputValidationError>{errors.email.message}</InputValidationError>
				)}
			</div>

			<div className="w-full relative">
				<PasswordIcon className="absolute top-9 right-1 text-black/50" />
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

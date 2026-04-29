"use client";
import InputValidationError from "@/shared/components/base/input-validation-error";
import { PasswordInput, TextInput } from "@/shared/components/base/inputs";
import ValidatedForm from "@/shared/components/validated-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AdminLoginFormData, adminLoginSchema } from "../../utils";

export default function LoginForm() {
	// custom hook needed
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
					name="username"
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
		</ValidatedForm>
	);
}

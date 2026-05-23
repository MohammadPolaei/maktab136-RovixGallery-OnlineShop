"use client";

import Modal from "@/components/base/modal";
import AuthForm from "@/components/shared/auth-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginInput, loginSchema } from "../utils/login-schemas";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginInput>({
		resolver: zodResolver(loginSchema),
	});

	const [errorLogin, setErrorLogin] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const router = useRouter();

	const onSubmit = async (data: LoginInput) => {
		console.log(data);
		const response = await fetch("/api/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			router.replace("/");
		} else {
			setErrorLogin(true);
			setErrorMessage(response.statusText);
		}
	};
	return (
		<div>
			<AuthForm
				errors={errors}
				formType="login"
				handleSubmit={handleSubmit}
				isSubmitting={isSubmitting}
				onSubmit={onSubmit}
				register={register}
			/>
			<Modal
				modalUsecaseType="message"
				setOpen={() => {}}
				modalTitle="خطا در ورود به حساب"
				open={errorLogin}
			>
				{errorMessage}
			</Modal>
		</div>
	);
}

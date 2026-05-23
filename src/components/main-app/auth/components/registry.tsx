"use client";

import Modal from "@/components/base/modal";
import AuthForm from "@/components/shared/auth-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterInput, registerSchema } from "../utils/registry-schemas";

export default function Registry() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<RegisterInput>({
		resolver: zodResolver(registerSchema),
	});

	const [errorRegistry, setErrorRegistry] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const router = useRouter();

	const onSubmit = async (data: RegisterInput) => {
		const response = await fetch("/api/auth/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		const result = await response.json();

		if (response.ok) {
			router.push("/auth/login");
		} else {
			setErrorRegistry(true);
			setErrorMessage(response.statusText);
		}
	};
	return (
		<div>
			<AuthForm
				errors={errors}
				formType="registry"
				handleSubmit={handleSubmit}
				isSubmitting={isSubmitting}
				onSubmit={onSubmit}
				register={register}
			/>
			<Modal
				modalUsecaseType="message"
				setOpen={() => {}}
				modalTitle="خطا در ورود به حساب"
				open={errorRegistry}
			>
				<span>"نام کاربری یا رمز عبور اشتباه است"</span>
				<span className="text-red-600 text-[10px">{errorMessage}</span>
			</Modal>
		</div>
	);
}

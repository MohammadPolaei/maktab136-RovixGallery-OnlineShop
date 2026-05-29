"use client";

import Modal from "@/components/base/modal";
import AuthForm from "@/components/shared/auth-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterInput, registerSchema } from "../utils/registry-schemas";
import { toast } from "sonner";

export default function Registry() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<RegisterInput>({
		resolver: zodResolver(registerSchema),
	});

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
			toast.error(response.statusText);
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
		</div>
	);
}

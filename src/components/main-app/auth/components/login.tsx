"use client";

import AuthForm from "@/components/shared/auth-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LoginInput, loginSchema } from "../utils/login-schemas";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginInput>({
		resolver: zodResolver(loginSchema),
	});

	const router = useRouter();

	const onSubmit = async (data: LoginInput) => {
		const response = await fetch("/api/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		const resData = await response.json();

		if (response.ok) {
			toast.success("ورود موفقیت آمیز بود . خوش آمدید");
			router.back();
		} else {
			toast.error(resData.message);
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
		</div>
	);
}

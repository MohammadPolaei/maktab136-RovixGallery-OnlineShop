"use client";

import AuthForm from "@/components/shared/auth-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { RegisterInput, registerSchema } from "../utils/registry-schemas";

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

		if (response.ok) {
			toast.success("حساب کاربری با موفقیت ایجاد شد");
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

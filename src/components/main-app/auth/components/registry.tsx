"use client";

import AuthForm from "@/components/shared/auth-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

	const onSubmit = async (data: RegisterInput) => {
		console.log(data);
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

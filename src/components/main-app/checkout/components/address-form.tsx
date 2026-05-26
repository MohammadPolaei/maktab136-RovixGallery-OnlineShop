"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddressFormValues, addressSchema } from "../utils";
import { User } from "./checkout-layout";

export default function AddressForm({ userData }: { userData: User | null }) {
	const {
		register,
		formState: { errors },
	} = useForm<AddressFormValues>({
		resolver: zodResolver(addressSchema),
		defaultValues: {
			province: "",
			city: "",
			address: "",
			postalCode: "",
			extraNote: "",
		},
	});

	return (
		<div className="rounded-sm border border-gray-200 bg-white p-5">
			<h2 className="mb-4 text-lg font-semibold">آدرس ارسال</h2>

			<div className="grid gap-4 sm:grid-cols-2">
				<Input
					label="استان"
					{...register("province")}
					error={errors.province?.message}
				/>
				<Input label="شهر" {...register("city")} error={errors.city?.message} />
			</div>

			<div className="mt-4">
				<Input
					label="آدرس کامل"
					{...register("address")}
					error={errors.address?.message}
				/>
			</div>

			<div className="mt-4 grid gap-4 sm:grid-cols-2">
				<Input
					label="کد پستی"
					{...register("postalCode")}
					error={errors.postalCode?.message}
				/>
				<Input
					label="توضیحات اضافه"
					{...register("extraNote")}
					error={errors.extraNote?.message}
				/>
			</div>
		</div>
	);
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	error?: string;
};

function Input({ label, error, ...props }: InputProps) {
	return (
		<div>
			<label className="mb-1 block text-sm font-medium text-gray-700">
				{label}
			</label>
			<input
				{...props}
				className="w-full rounded-sm border border-gray-300 px-4 py-3 outline-none focus:border-black"
			/>
			{error && <p className="mt-1 text-xs text-red-500">{error}</p>}
		</div>
	);
}

"use client";

import SubmitButton from "@/components/base/buttons";
import {
	ProductAddSchema,
	ProductAddSchemaType,
} from "@/components/dashboard/utils/product-add-schema";

import { useProductMutations } from "@/components/dashboard/hooks/use-product-mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddEditProductFormMainpart from "../../../../shared/add-edit-product-form-mainpart";
import AddProductFormProperties from "../../../../shared/add-edit-product-form-properties";
import AddEditProductFormSetting from "../../../../shared/add-edit-product-form-setting";

export default function AddProductForm({
	setOpen,
	setAddSuccess,
}: {
	setOpen: (val: boolean) => void;
	setAddSuccess: (val: boolean) => void;
}) {
	const [previews, setPreviews] = useState<string[]>([]);
	// add product

	const { addProduct, isAdding, errorAdding } = useProductMutations();

	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<ProductAddSchemaType>({
		resolver: zodResolver(ProductAddSchema),
		mode: "onSubmit",
		reValidateMode: "onChange",
		defaultValues: {
			isAuthentic: true,
			isActive: true,
			popularity: 0,
			images: [],
			description: "",
		},
	});

	const handleImageChange = (files: FileList | null) => {
		if (!files) return;

		const fileArray = Array.from(files);

		setValue("images", fileArray, {
			shouldValidate: true,
		});

		const urls = fileArray.map((file) => URL.createObjectURL(file));
		setPreviews(urls);
	};

	// logic
	const onSubmit = (data: ProductAddSchemaType) => {
		addProduct(
			{ data },
			{
				onSuccess: () => {
					setPreviews([]);
					setOpen(false);
					setAddSuccess(true);
				},
			}
		);
	};
	useEffect(() => {
		return () => {
			previews.forEach((url) => URL.revokeObjectURL(url));
		};
	}, [previews]);

	// UI

	return (
		<div className="w-full max-w-5xl mx-auto">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
				{/* اطلاعات اصلی */}
				<section className="bg-white border border-gray-200 rounded-sm p-6 space-y-8 shadow shadow-black/5">
					<h2 className="text-lg font-bold text-(--color-accent-green)">
						اطلاعات اصلی محصول
					</h2>

					<AddEditProductFormMainpart
						control={control}
						isUpdating={false}
						register={register}
						errors={errors}
						isAdding={isAdding}
						editable={false}
					/>
				</section>

				{/* مشخصات */}
				<section className="bg-white border border-gray-200 rounded-sm p-6 space-y-8 shadow shadow-black/5">
					<h2 className="text-lg font-bold text-(--color-accent-green)">
						مشخصات محصول
					</h2>

					<AddProductFormProperties
						isUpdating={false}
						register={register}
						errors={errors}
						isAdding={isAdding}
						editable={false}
					/>
				</section>

				{/* تنظیمات */}
				<section className="bg-white border border-gray-200 rounded-sm p-6 space-y-8 shadow shadow-black/5">
					<h2 className="text-lg font-bold text-(--color-accent-green)">
						تنظیمات
					</h2>
					<AddEditProductFormSetting
						setPreviews={setPreviews}
						previews={previews}
						handleImageChange={handleImageChange}
						isUpdating={false}
						register={register}
						errors={errors}
						isAdding={isAdding}
						editable={false}
					/>
				</section>

				<div className="flex justify-center pt-4">
					<div className="w-full md:w-72">
						{errorAdding && (
							<div className="text-red-500 w-full text-center">
								{errorAdding.message || "خطا در ثبت محصول"}
							</div>
						)}
						<SubmitButton disabaled={isAdding}>
							{isAdding ? "در حال ثبت..." : "ثبت محصول"}
						</SubmitButton>
					</div>
				</div>
			</form>
		</div>
	);
}

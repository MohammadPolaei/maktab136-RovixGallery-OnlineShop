"use client";

import SubmitButton from "@/components/base/buttons";
import {
	ProductAddSchema,
	ProductAddSchemaType,
} from "@/components/dashboard/utils/product-add-schema";

import { Product } from "@/types/product-data-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutateFunction } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddEditProductFormMainpart from "./add-edit-product-form-mainpart";
import AddEditProductFormProperties from "./add-edit-product-form-properties";
import AddEditProductFormSetting from "./add-edit-product-form-setting";

export default function ProductEditForm({
	product,
	setOpen,
	setEditSuccess,
	updateProduct,
	errorUpdating,
	isUpdating,
}: {
	product: Product;
	setOpen: (val: boolean) => void;
	setEditSuccess: (val: boolean) => void;
	updateProduct: UseMutateFunction<
		Product,
		Error,
		{ id: string; data: ProductAddSchemaType }
	>;
	isUpdating: boolean | undefined;
	errorUpdating: Error | null;
}) {
	const [previews, setPreviews] = useState<string[]>([]);
	// edit product

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<ProductAddSchemaType>({
		resolver: zodResolver(ProductAddSchema),
		defaultValues: {
			isAuthentic: true,
			isActive: true,
			popularity: 0,
			images: [],
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
	useEffect(() => {
		return () => {
			previews.forEach((url) => URL.revokeObjectURL(url));
		};
	}, [previews]);

	// edit product
	const id = product._id;
	const onSubmit = (data: ProductAddSchemaType) => {
		updateProduct(
			{ id, data },
			{
				onSuccess: () => {
					setOpen(false);
					setEditSuccess(true);
					reset();
				},
			}
		);
	};
	useEffect(() => {
		if (!product) return;

		reset({
			name: product.name,
			description: product.description,
			price: Number(product.price),
			stock: Number(product.stock),
			popularity: Number(product.popularity),

			// enum ها:
			category: product.category === "watch" ? "watch" : "watch",

			brand:
				product.brand === "Citizen" ||
				product.brand === "Omega" ||
				product.brand === "Orient" ||
				product.brand === "Casio" ||
				product.brand === "Seiko" ||
				product.brand === "Tag Heuer" ||
				product.brand === "Rolex" ||
				product.brand === "Hamilton" ||
				product.brand === "Longines" ||
				product.brand === "Tissot"
					? product.brand
					: "Citizen",

			brandCountry:
				product.brandCountry === "ژاپن" || product.brandCountry === "سوئیس"
					? product.brandCountry
					: "ژاپن",

			gender:
				product.gender === "مردانه" ||
				product.gender === "زنانه" ||
				product.gender === "فاقد جنسیت"
					? product.gender
					: "فاقد جنسیت",

			material:
				product.material === "چرم" ||
				product.material === "لاستیک" ||
				product.material === "تیتانیوم" ||
				product.material === "استیل ضد زنگ"
					? product.material
					: "چرم",

			color:
				product.color === "مشکی" ||
				product.color === "آبی" ||
				product.color === "نقره ای" ||
				product.color === "قهوه ای"
					? product.color
					: "مشکی",

			dialColor:
				product.dialColor === "مشکی" ||
				product.dialColor === "سبز" ||
				product.dialColor === "آبی" ||
				product.dialColor === "سفید"
					? product.dialColor
					: "مشکی",

			isAuthentic: product.isAuthentic,
			isActive: product.isActive,

			images: [],
		});
	}, [product, reset]);

	return (
		<div className="w-full max-w-5xl mx-auto p-6 text-right">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
				{/* اطلاعات اصلی */}
				<section className="bg-white border border-gray-200 rounded-2xl p-6 space-y-8 shadow-sm">
					<h2 className="text-lg font-bold text-(--color-accent-green)">
						اطلاعات اصلی محصول
					</h2>

					<AddEditProductFormMainpart
						isUpdating={isUpdating}
						register={register}
						errors={errors}
						isAdding={false}
						editable={false}
					/>
				</section>

				{/* مشخصات */}
				<section className="bg-white border border-gray-200 rounded-2xl p-6 space-y-8 shadow-sm">
					<h2 className="text-lg font-bold text-(--color-accent-green)">
						مشخصات محصول
					</h2>

					<AddEditProductFormProperties
						isUpdating={isUpdating}
						register={register}
						errors={errors}
						isAdding={false}
						editable={false}
					/>
				</section>

				{/* تنظیمات */}
				<section className="bg-white border border-gray-200 rounded-2xl p-6 space-y-8 shadow-sm">
					<h2 className="text-lg font-bold text-(--color-accent-green)">
						تنظیمات
					</h2>
					<AddEditProductFormSetting
						handleImageChange={handleImageChange}
						previews={previews}
						isUpdating={isUpdating}
						register={register}
						errors={errors}
						isAdding={false}
						editable={false}
					/>
				</section>
				<div className="flex justify-center pt-4">
					<div className="w-full md:w-72">
						{errorUpdating && (
							<div className="text-red-500 w-full text-center">
								{"خطا در بروزرسانی محصول"}
							</div>
						)}
						<SubmitButton disabaled={isUpdating}>
							{isUpdating ? "در حال ثبت..." : "ثبت محصول"}
						</SubmitButton>
					</div>
				</div>
			</form>
		</div>
	);
}

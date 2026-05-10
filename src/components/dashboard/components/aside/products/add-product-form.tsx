"use client";

import SubmitButton from "@/components/base/buttons";
import InputValidationError from "@/components/base/input-validation-error";
import { TextInput } from "@/components/base/inputs";
import {
	ProductAddSchema,
	ProductAddSchemaType,
} from "@/components/dashboard/utils/product-add-schema";

import { useProductMutations } from "@/components/dashboard/hooks/use-product-mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddProductInputContainer from "./add-product-input-container";

export default function AddProductForm({
	setOpen,
}: {
	setOpen: (val: boolean) => void;
}) {
	const [previews, setPreviews] = useState<string[]>([]);
	// add product

	const { addProduct, isAdding, errorAdding } = useProductMutations();

	const {
		register,
		handleSubmit,
		setValue,
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

	const onSubmit = (data: ProductAddSchemaType) => {
		addProduct(
			{ data },
			{
				onSuccess: () => {
					setPreviews([]);
					setOpen(false);
				},
			}
		);
	};

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

	return (
		<div className="w-full max-w-5xl mx-auto p-6">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
				{/* اطلاعات اصلی */}
				<section className="bg-white border border-gray-200 rounded-2xl p-6 space-y-8 shadow-sm">
					<h2 className="text-lg font-bold text-(--color-accent-green)">
						اطلاعات اصلی محصول
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AddProductInputContainer>
							<TextInput
								extraClasses="w-full"
								name="name"
								label="نام محصول"
								placeholder="نام محصول"
								register={register("name")}
							/>
							{errors.name && (
								<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.name.message}
								</InputValidationError>
							)}
						</AddProductInputContainer>

						<AddProductInputContainer>
							<TextInput
								extraClasses="w-full"
								name="price"
								label="قیمت"
								placeholder="قیمت به تومان"
								register={register("price")}
							/>
							{errors.price && (
								<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.price.message}
								</InputValidationError>
							)}
						</AddProductInputContainer>

						<AddProductInputContainer>
							<TextInput
								extraClasses="w-full"
								name="stock"
								label="موجودی"
								placeholder="تعداد موجودی"
								register={register("stock")}
							/>
							{errors.stock && (
								<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.stock.message}
								</InputValidationError>
							)}
						</AddProductInputContainer>

						<div className="relative p-0 flex items-center justify-between h-16">
							<select
								{...register("category")}
								className="absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
							>
								<option value="">انتخاب دسته بندی</option>
								<option value="watch">ساعت</option>
							</select>

							{errors.category && (
								<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.category.message}
								</InputValidationError>
							)}
						</div>
					</div>

					<div className="relative p-0 flex items-center justify-between">
						<textarea
							{...register("description")}
							placeholder="توضیحات محصول"
							className="w-full min-h-32 rounded-md border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
						/>

						{errors.description && (
							<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
								{errors.description.message}
							</InputValidationError>
						)}
					</div>
				</section>

				{/* مشخصات */}
				<section className="bg-white border border-gray-200 rounded-2xl p-6 space-y-8 shadow-sm">
					<h2 className="text-lg font-bold text-(--color-accent-green)">
						مشخصات محصول
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="relative p-0 flex items-center justify-between h-16">
							<select
								{...register("brand")}
								className="absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
							>
								<option value="">برند</option>
								<option value="Citizen">Citizen</option>
								<option value="Omega">Omega</option>
								<option value="Orient">Orient</option>
								<option value="Casio">Casio</option>
								<option value="Seiko">Seiko</option>
								<option value="Tag Heuer">Tag Heuer</option>
								<option value="Rolex">Rolex</option>
								<option value="Hamilton">Hamilton</option>
								<option value="Longines">Longines</option>
								<option value="Tissot">Tissot</option>
							</select>
							{errors.brand && (
								<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.brand.message}
								</InputValidationError>
							)}
						</div>

						<div className="relative p-0 flex items-center justify-between h-16">
							<select
								{...register("brandCountry")}
								className="absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
							>
								<option value="">کشور سازنده</option>
								<option value="ژاپن">ژاپن</option>
								<option value="سوئیس">سوئیس</option>
							</select>

							{errors.brandCountry && (
								<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.brandCountry.message}
								</InputValidationError>
							)}
						</div>
						<div className="relative p-0 flex items-center justify-between h-16">
							<select
								{...register("gender")}
								className="absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
							>
								<option value="">انتخاب جنسیت</option>
								<option value="مردانه">مردانه</option>
								<option value="زنانه">زنانه</option>
								<option value="فاقد جنسیت">فاقد جنسیت</option>
							</select>

							{errors.gender && (
								<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.gender.message}
								</InputValidationError>
							)}
						</div>

						<div className="relative p-0 flex items-center justify-between h-16">
							<select
								{...register("material")}
								className="absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
							>
								<option value="">جنس بدنه</option>
								<option value="چرم">چرم</option>
								<option value="لاستیک">لاستیک</option>
								<option value="تیتانیوم">تیتانیوم</option>
								<option value="استیل ضد زنگ">استیل ضد زنگ</option>
							</select>

							{errors.material && (
								<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.material.message}
								</InputValidationError>
							)}
						</div>
						<div className="relative p-0 flex items-center justify-between h-16">
							<select
								{...register("color")}
								className="absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
							>
								<option value="">رنگ</option>
								<option value="مشکی">مشکی</option>
								<option value="آبی">آبی</option>
								<option value="نقره ای">نقره ای</option>
								<option value="قهوه ای">قهوه ای</option>
							</select>

							{errors.color && (
								<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.color.message}
								</InputValidationError>
							)}
						</div>

						<div className="relative p-0 flex items-center justify-between h-16">
							<select
								{...register("dialColor")}
								className="absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
							>
								<option value="">رنگ صفحه</option>
								<option value="مشکی">مشکی</option>
								<option value="سبز">سبز</option>
								<option value="آبی">آبی</option>
								<option value="سفید">سفید</option>
							</select>

							{errors.dialColor && (
								<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.dialColor.message}
								</InputValidationError>
							)}
						</div>
					</div>

					<div className="flex items-center gap-3">
						<input
							type="checkbox"
							id="isAuthentic"
							{...register("isAuthentic")}
							className="size-4"
						/>
						<label htmlFor="isAuthentic">محصول اصل است</label>
					</div>
				</section>

				{/* تنظیمات */}
				<section className="bg-white border border-gray-200 rounded-2xl p-6 space-y-8 shadow-sm">
					<h2 className="text-lg font-bold text-(--color-accent-green)">
						تنظیمات
					</h2>

					<div className="relative p-0 flex items-center justify-between">
						<TextInput
							extraClasses="w-full"
							name="popularity"
							label="محبوبیت"
							placeholder="عددی بین 0 تا 100"
							register={register("popularity")}
						/>
						{errors.popularity && (
							<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
								{errors.popularity.message}
							</InputValidationError>
						)}
					</div>

					<div className="relative pb-8 space-y-4">
						<label className="font-medium text-sm">تصاویر محصول</label>

						<input
							type="file"
							multiple
							accept="image/png,image/jpeg,image/webp"
							className="w-full rounded-md border border-gray-300 p-3 file:ml-4 file:rounded-md file:border-0 file:bg-(--color-accent-green) file:px-4 file:py-2 file:text-white"
							onChange={(e) => handleImageChange(e.target.files)}
						/>

						{errors.images && (
							<InputValidationError extraClasses="text-[8px] sm:text-[10px] md:text-[12px]">
								{errors.images.message as string}
							</InputValidationError>
						)}

						{previews.length > 0 && (
							<div className="flex flex-wrap gap-4 pt-4">
								{previews.map((src, index) => (
									<div
										key={index}
										className="relative overflow-hidden rounded-xl border border-gray-200"
									>
										<img
											src={src}
											alt="preview"
											className="h-24 w-24 object-cover"
										/>
									</div>
								))}
							</div>
						)}
					</div>

					<div className="flex items-center gap-3">
						<input
							type="checkbox"
							id="isActive"
							{...register("isActive")}
							className="size-4"
						/>
						<label htmlFor="isActive">محصول فعال باشد</label>
					</div>
				</section>

				<div className="flex justify-center pt-4">
					<div className="w-full md:w-72">
						<SubmitButton disabaled={isAdding}>
							{isAdding ? "در حال ثبت..." : "ثبت محصول"}
						</SubmitButton>
					</div>
				</div>
			</form>
		</div>
	);
}

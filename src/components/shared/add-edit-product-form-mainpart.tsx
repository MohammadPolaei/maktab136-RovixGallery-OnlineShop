"use client";

import InputValidationError from "@/components/base/input-validation-error";
import { TextInput } from "@/components/base/inputs";
import { ProductAddSchemaType } from "@/components/dashboard/utils/product-add-schema";
import {
	Control,
	Controller,
	FieldErrors,
	UseFormRegister,
} from "react-hook-form";
import AddProductInputContainer from "../dashboard/components/aside/products/add-product-input-container";
import RichTextEditor from "../dashboard/components/aside/products/rich-text-editor";

type Props = {
	register: UseFormRegister<ProductAddSchemaType>;
	control: Control<ProductAddSchemaType>;
	isUpdating: boolean | undefined;
	isAdding: boolean;
	editable: boolean;
	errors: FieldErrors<ProductAddSchemaType>;
};

const fields: {
	name: keyof ProductAddSchemaType;
	type: "number" | "text" | "email";
	label: string;
	placeholder: string;
}[] = [
	{ name: "name", label: "نام محصول", placeholder: "نام محصول", type: "text" },
	{
		name: "price",
		label: "قیمت",
		placeholder: "قیمت به تومان",
		type: "number",
	},
	{
		name: "stock",
		label: "موجودی",
		placeholder: "تعداد موجودی - پیش فرض 0",
		type: "number",
	},
];

export default function AddEditProductFormMainpart({
	register,
	isUpdating,
	isAdding,
	editable,
	errors,
	control,
}: Props) {
	const isSubmiting = editable ? isUpdating : isAdding;

	return (
		<section>
			<AddProductInputContainer>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* -------------------- TEXT INPUTS (Dynamic) -------------------- */}
					{fields.map((item) => (
						<div className="relative" key={item.name}>
							<TextInput
								inputExtraclasses="text-center bg-(--color-accent-green)/10 h-10"
								type={item.type}
								isSubmiting={isSubmiting}
								extraClasses="w-full disabled:opacity-50"
								name={item.name}
								label={item.label}
								placeholder={item.placeholder}
								register={register(item.name)}
							/>

							{errors[item.name]?.message && (
								<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[10px] md:text-[12px]">
									{errors[item.name]?.message as string}
								</InputValidationError>
							)}
						</div>
					))}

					{/* -------------------- CATEGORY SELECT -------------------- */}
					<div className="relative p-0 flex items-center justify-between h-16">
						<select
							disabled={isSubmiting}
							{...register("category")}
							className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
						>
							<option value="">انتخاب دسته بندی</option>
							<option value="watch">ساعت</option>
						</select>

						{errors.category?.message && (
							<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[10px] md:text-[12px]">
								{errors.category.message}
							</InputValidationError>
						)}
					</div>

					{/* -------------------- DESCRIPTION TEXTAREA -------------------- */}
					<label className="text-[12px] md:text-[14px] text-(--color-dark-green) font-semibold">
						{"توضیحات محصول"}
					</label>
					<div className="relative col-span-2 ">
						<Controller
							disabled={isSubmiting}
							name="description"
							control={control}
							render={({ field }) => (
								<RichTextEditor value={field.value} onChange={field.onChange} />
							)}
						/>

						{errors.description?.message && (
							<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[10px] md:text-[12px]">
								{errors.description.message}
							</InputValidationError>
						)}
					</div>
				</div>
			</AddProductInputContainer>
		</section>
	);
}

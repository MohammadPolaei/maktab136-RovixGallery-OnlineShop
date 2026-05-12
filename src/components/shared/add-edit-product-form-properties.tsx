import InputValidationError from "@/components/base/input-validation-error";
import { ProductAddSchemaType } from "@/components/dashboard/utils/product-add-schema";
import { FieldErrors, UseFormRegister } from "react-hook-form";

const brandOptions = [
	{ value: "", text: "برند" },
	{ value: "Citizen", text: "Citizen" },
	{ value: "Omega", text: "Omega" },
	{ value: "Orient", text: "Orient" },
	{ value: "Casio", text: "Casio" },
	{ value: "Seiko", text: "Seiko" },
	{ value: "Tag Heuer", text: "Tag Heuer" },
	{ value: "Rolex", text: "Rolex" },
	{ value: "Hamilton", text: "Hamilton" },
	{ value: "Longines", text: "Longines" },
	{ value: "Tissot", text: "Tissot" },
];

const brandCountryOptions = [
	{ value: "", text: "کشور سازنده" },
	{ value: "ژاپن", text: "ژاپن" },
	{ value: "سوئیس", text: "سوئیس" },
];

const genderOptions = [
	{ value: "", text: "انتخاب جنسیت" },
	{ value: "مردانه", text: "مردانه" },
	{ value: "زنانه", text: "زنانه" },
	{ value: "فاقد جنسیت", text: "فاقد جنسیت" },
];

const materialOptions = [
	{ value: "", text: "جنس بدنه" },
	{ value: "چرم", text: "چرم" },
	{ value: "لاستیک", text: "لاستیک" },
	{ value: "تیتانیوم", text: "تیتانیوم" },
	{ value: "استیل زد زنگ", text: "استیل زد زنگ" },
];

const colorOptions = [
	{ value: "", text: "رنگ" },
	{ value: "مشکی", text: "مشکی" },
	{ value: "آبی", text: "آبی" },
	{ value: "نقره ای", text: "نقره ای" },
	{ value: "قهوه ای", text: "قهوه ای" },
];

const dialColorOptions = [
	{ value: "", text: "رنگ صفحه" },
	{ value: "مشکی", text: "مشکی" },
	{ value: "سبز", text: "سبز" },
	{ value: "آبی", text: "آبی" },
	{ value: "سفید", text: "سفید" },
];

export default function AddEditProductFormProperties({
	register,
	isUpdating,
	isAdding,
	editable,
	errors,
}: {
	register: UseFormRegister<ProductAddSchemaType>;
	isUpdating: boolean | undefined;
	isAdding: boolean;
	editable: boolean;
	errors: FieldErrors<ProductAddSchemaType>;
}) {
	const isSubmitting = editable ? isUpdating : isAdding;

	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isSubmitting}
						{...register("brand")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{brandOptions.map((item) => (
							<option key={item.text} value={item.value}>
								{item.text}
							</option>
						))}
					</select>

					{errors.brand?.message && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.brand.message as string}
						</InputValidationError>
					)}
				</div>

				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isSubmitting}
						{...register("brandCountry")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{brandCountryOptions.map((item) => (
							<option key={item.text} value={item.value}>
								{item.text}
							</option>
						))}
					</select>

					{errors.brandCountry?.message && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.brandCountry.message as string}
						</InputValidationError>
					)}
				</div>

				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isSubmitting}
						{...register("gender")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{genderOptions.map((item) => (
							<option key={item.text} value={item.value}>
								{item.text}
							</option>
						))}
					</select>

					{errors.gender?.message && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.gender.message as string}
						</InputValidationError>
					)}
				</div>

				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isSubmitting}
						{...register("material")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{materialOptions.map((item) => (
							<option key={item.text} value={item.value}>
								{item.text}
							</option>
						))}
					</select>

					{errors.material?.message && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.material.message as string}
						</InputValidationError>
					)}
				</div>

				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isSubmitting}
						{...register("color")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{colorOptions.map((item) => (
							<option key={item.text} value={item.value}>
								{item.text}
							</option>
						))}
					</select>

					{errors.color?.message && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.color.message as string}
						</InputValidationError>
					)}
				</div>

				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isSubmitting}
						{...register("dialColor")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{dialColorOptions.map((item) => (
							<option key={item.text} value={item.value}>
								{item.text}
							</option>
						))}
					</select>

					{errors.dialColor?.message && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.dialColor.message as string}
						</InputValidationError>
					)}
				</div>
			</div>

			<div className="flex items-center gap-3 mt-10">
				<input
					disabled={isSubmitting}
					type="checkbox"
					id="isAuthentic"
					{...register("isAuthentic")}
					className="disabled:opacity-50 size-4"
				/>
				<label htmlFor="isAuthentic">محصول اصل است</label>
			</div>
		</section>
	);
}

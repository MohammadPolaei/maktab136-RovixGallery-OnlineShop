import InputValidationError from "@/components/base/input-validation-error";
import {
	errors,
	isAdding,
	register,
} from "@/components/dashboard/utils/add-product-form-utils";

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

export default function AddProductFormProperties() {
	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isAdding}
						{...register("brand")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{brandOptions.map((item) => {
							return <option value={item.value}>{item.text}</option>;
						})}
					</select>
					{errors.brand && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.brand.message}
						</InputValidationError>
					)}
				</div>

				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isAdding}
						{...register("brandCountry")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{brandCountryOptions.map((item) => {
							return <option value={item.value}>{item.text}</option>;
						})}
					</select>

					{errors.brandCountry && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.brandCountry.message}
						</InputValidationError>
					)}
				</div>
				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isAdding}
						{...register("gender")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{genderOptions.map((item) => {
							return <option value={item.value}>{item.text}</option>;
						})}
					</select>

					{errors.gender && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.gender.message}
						</InputValidationError>
					)}
				</div>

				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isAdding}
						{...register("material")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{materialOptions.map((item) => {
							return <option value={item.value}>{item.text}</option>;
						})}
					</select>

					{errors.material && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.material.message}
						</InputValidationError>
					)}
				</div>
				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isAdding}
						{...register("color")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{colorOptions.map((item) => {
							return <option value={item.value}>{item.text}</option>;
						})}
					</select>

					{errors.color && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.color.message}
						</InputValidationError>
					)}
				</div>

				<div className="relative p-0 flex items-center justify-between h-16">
					<select
						disabled={isAdding}
						{...register("dialColor")}
						className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
					>
						{dialColorOptions.map((item) => {
							return <option value={item.value}>{item.text}</option>;
						})}
					</select>

					{errors.dialColor && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.dialColor.message}
						</InputValidationError>
					)}
				</div>
			</div>

			<div className="flex items-center gap-3">
				<input
					disabled={isAdding}
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

import InputValidationError from "@/components/base/input-validation-error";
import { TextInput } from "@/components/base/inputs";
import {
	errors,
	isAdding,
	register,
} from "@/components/dashboard/utils/add-product-form-utils";
import { isUpdating } from "@/components/dashboard/utils/product-edit-form-utils";
import AddProductInputContainer from "./add-product-input-container";

const fields = [
	{ name: "name", label: "نام محصول", placeholder: "نام محصول" },
	{ name: "price", label: "قیمت", placeholder: "قیمت به تومان" },
	{ name: "stock", label: "موجودی", placeholder: "تعداد موجودی" },
];

export default function AddEditProductFormMainpart({
	editable,
}: {
	editable: boolean;
}) {
	return (
		<section>
			{fields.map((item) => {
				return (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AddProductInputContainer>
							<TextInput
								isSubmiting={editable ? isUpdating : isAdding}
								extraClasses="w-full disabled:opacity-50"
								name={item.name}
								label={item.label}
								placeholder={item.label}
								register={register(
									item.name === "name"
										? "name"
										: item.name === "price"
										? "price"
										: "stock"
								)}
							/>
							{errors.name ? (
								<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.name.message}
								</InputValidationError>
							) : errors.price ? (
								<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.price.message}
								</InputValidationError>
							) : (
								<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.stock?.message}
								</InputValidationError>
							)}
							<div className="relative p-0 flex items-center justify-between h-16">
								<select
									disabled={editable ? isUpdating : isAdding}
									{...register("category")}
									className="disabled:opacity-50 absolute bottom-0 w-full text-[12px] md:text-[16px] rounded-sm border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
								>
									<option value="">انتخاب دسته بندی</option>
									<option value="watch">ساعت</option>
								</select>

								{errors.category && (
									<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
										{errors.category.message}
									</InputValidationError>
								)}
							</div>
						</AddProductInputContainer>
						<div className="disabled:opacity-50 relative p-0 flex flex-col items-center justify-between">
							<textarea
								disabled={editable ? isUpdating : isAdding}
								{...register("description")}
								placeholder="توضیحات محصول"
								className="w-full min-h-32 rounded-md border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-(--color-accent-green)"
							/>

							{errors.description && (
								<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
									{errors.description.message}
								</InputValidationError>
							)}
						</div>
					</div>
				);
			})}
		</section>
	);
}

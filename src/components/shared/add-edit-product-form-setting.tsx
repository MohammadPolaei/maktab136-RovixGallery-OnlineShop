import ImageIcon from "@/assets/SVG/add-edit-product-forms/image-icon";
import InputValidationError from "@/components/base/input-validation-error";
import { TextInput } from "@/components/base/inputs";
import { ProductAddSchemaType } from "@/components/dashboard/utils/product-add-schema";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export default function AddEditProductFormSetting({
	register,
	isUpdating,
	isAdding,
	editable,
	errors,
	handleImageChange,
	previews,
	setPreviews,
}: {
	register: UseFormRegister<ProductAddSchemaType>;
	isUpdating: boolean | undefined;
	isAdding: boolean;
	editable: boolean;
	errors: FieldErrors<ProductAddSchemaType>;
	handleImageChange: (files: FileList | null) => void;
	previews: string[];
	setPreviews: (val: string[]) => void;
}) {
	const isSubmitting = editable ? isUpdating : isAdding;

	return (
		<div>
			<div className="relative p-0 flex items-center justify-between">
				<TextInput
					inputExtraclasses="text-center bg-(--color-accent-green)/10"
					type="number"
					isSubmiting={isSubmitting}
					extraClasses="w-1/4 disabled:opacity-50"
					name="popularity"
					label="محبوبیت"
					placeholder="عددی بین 0 تا 100"
					register={register("popularity")}
				/>

				{errors.popularity?.message && (
					<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
						{errors.popularity.message as string}
					</InputValidationError>
				)}
			</div>

			<div className="relative py-8 space-y-4">
				<div className="w-72 md:w-100 flex justify-items-start items-center">
					<label htmlFor="images" className="cursor-pointer">
						<div className="w-30 flex justify-evenly items-center font-medium text-[12px] p-2 rounded-sm bg-(--color-dark-green) hover:bg-(--color-accent-green) text-white disabled:opacity-50 cursor-pointer">
							<ImageIcon />
							انتخاب تصاویر
						</div>
					</label>

					<span className="mr-3 text-gray-600 text-[12px] w-40 rounded-sm p-3 file:ml-4 file:rounded-sm file:border-0 file:bg-(--color-accent-green) file:px-4 file:py-2 file:text-white">
						{previews?.length
							? `${previews.length} فایل انتخاب شد`
							: "فایلی انتخاب نشده"}
					</span>
					{/* hidden but works */}
					<input
						id="images"
						disabled={isSubmitting}
						type="file"
						multiple
						accept="image/png,image/jpeg,image/webp"
						className="hidden"
						onChange={(e) => handleImageChange(e.target.files)}
					/>

					{errors.images?.message && (
						<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
							{errors.images.message as string}
						</InputValidationError>
					)}
				</div>
				{/* preview uploaded images */}
				{previews.length > 0 && (
					<div className="flex flex-wrap gap-4 pt-4">
						{previews.map((src, index) => (
							<div
								key={index}
								className="relative overflow-hidden rounded-sm border border-gray-200"
							>
								<div className="relative">
									<span
										onClick={() => {
											setPreviews(previews.filter((img) => img !== src));
										}}
										className="absolute top-1 right-1 py-1 px-2 rounded-sm bg-white/40 text-[10px] text-center"
									>
										✖
									</span>
									<img
										src={src}
										alt="preview"
										className="h-24 w-24 object-cover"
									/>
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="flex items-center gap-3 mt-10">
				<input
					disabled={isSubmitting}
					type="checkbox"
					id="isActive"
					{...register("isActive")}
					className="size-4 disabled:opacity-50"
				/>
				<label htmlFor="isActive">محصول فعال باشد</label>
			</div>
		</div>
	);
}

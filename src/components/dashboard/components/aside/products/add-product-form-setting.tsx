import InputValidationError from "@/components/base/input-validation-error";
import { TextInput } from "@/components/base/inputs";
import {
	errors,
	handleImageChange,
	isAdding,
	previews,
	register,
} from "@/components/dashboard/utils/add-product-form-utils";

export default function AddProductFormSetting() {
	return (
		<div>
			<div className="relative p-0 flex items-center justify-between">
				<TextInput
					isSubmiting={isAdding}
					extraClasses="w-full disabled:opacity-50"
					name="popularity"
					label="محبوبیت"
					placeholder="عددی بین 0 تا 100"
					register={register("popularity")}
				/>
				{errors.popularity && (
					<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
						{errors.popularity.message}
					</InputValidationError>
				)}
			</div>

			<div className="relative pb-8 space-y-4">
				<label className="font-medium text-sm">تصاویر محصول</label>

				<input
					disabled={isAdding}
					type="file"
					multiple
					accept="image/png,image/jpeg,image/webp"
					className="disabled:opacity-50 w-full rounded-md border border-gray-300 p-3 file:ml-4 file:rounded-md file:border-0 file:bg-(--color-accent-green) file:px-4 file:py-2 file:text-white"
					onChange={(e) => handleImageChange(e.target.files)}
				/>

				{errors.images && (
					<InputValidationError extraClasses="absolute -bottom-5 right-0 text-[8px] sm:text-[10px] md:text-[12px]">
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
					disabled={isAdding}
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

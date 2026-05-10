import SubmitButton from "@/components/base/buttons";
import InputValidationError from "@/components/base/input-validation-error";
import { TextInput } from "@/components/base/inputs";
import {
	ProductAddSchema,
	ProductAddSchemaType,
} from "@/components/dashboard/utils/product-add-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddProductForm() {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<ProductAddSchemaType>({
		resolver: zodResolver(ProductAddSchema),
	});

	const onSubmit = (data: ProductAddSchemaType) => {
		console.log(data);
	};
	return (
		<div className="w-full p-2">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="w-full flex flex-col justify-center items-center gap-20 pt-10">
					<div className="w-full space-y-10">
						<div className="w-full p-3 rounded-md bg-(--color-accent-green) text-(--color-bg)">
							اطلاعات اصلی محصول
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
							<TextInput
								name="name"
								label="نام محصول"
								placeholder="نام محصول را وارد کنید"
								register={{ ...register("name") }}
							/>
							{errors.name && (
								<InputValidationError>
									{errors.name.message}
								</InputValidationError>
							)}

							<TextInput
								name="price"
								label="قیمت محصول"
								placeholder="نام محصول را وارد کنید"
								register={register("price", { valueAsNumber: true })}
							/>
							<TextInput
								name="stock"
								label="موجودی محصول"
								placeholder="موجودی محصول را وارد کنید"
								register={register("stock", { valueAsNumber: true })}
							/>
							<select
								{...register("category")}
								className="w-full rounded-md border p-3"
							>
								<option value="">دسته‌بندی را انتخاب کنید</option>
								<option value="watch">ساعت</option>
								<option value="smartwatch">ساعت هوشمند</option>
								<option value="accessory">اکسسوری</option>
							</select>

							<textarea
								{...register("description")}
								placeholder="توضیحات محصول را وارد کنید"
								className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-(--color-accent-green)"
							/>
						</div>
					</div>
					<div className="w-full space-y-10">
						<div className="w-full p-3 rounded-md bg-(--color-accent-green) text-(--color-bg)">
							مشخصات محصول
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
							<TextInput
								name="brand"
								label="برند محصول"
								placeholder="برند محصول را وارد کنید"
								register={{ ...register("brand") }}
							/>
							<TextInput
								name="brandCountry"
								label="کشور سازنده"
								placeholder="کشور سازنده را وارد کنید"
								register={{ ...register("brandCountry") }}
							/>
							<select
								{...register("gender")}
								className="w-full rounded-md border p-3"
							>
								<option value="">جنسیت را انتخاب کنید</option>
								<option value="مردانه">مردانه</option>
								<option value="زنانه">زنانه</option>
								<option value="فاقد جنسیت">فاقد جنسیت</option>
							</select>

							<TextInput
								name="material"
								label="جنس محصول"
								placeholder="جنس محصول را وارد کنید"
								register={{ ...register("material") }}
							/>
							<TextInput
								name="color"
								label="رنگ محصول"
								placeholder="رنگ محصول را وارد کنید"
								register={{ ...register("color") }}
							/>
							<TextInput
								name="dialColor"
								label="رنگ صفحه"
								placeholder="رنگ صفحه را وارد کنید"
								register={{ ...register("dialColor") }}
							/>
							<div>
								<label>اصالت محصول</label>
								<input type="checkbox" {...register("isAuthentic")} />
							</div>
						</div>
					</div>
					<div className="w-full space-y-10">
						<div className="w-full p-3 rounded-md bg-(--color-accent-green) text-(--color-bg)">
							تنظیمات
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
							<TextInput
								name="popularity"
								label="موجودی محصول"
								placeholder="موجودی محصول را وارد کنید"
								register={register("popularity", { valueAsNumber: true })}
							/>
							<input
								type="file"
								multiple
								accept="image/*"
								onChange={(e) => {
									const files = Array.from(e.target.files || []);
									setValue("images", files);
								}}
							/>

							<div>
								<label>فعال بودن محصول</label>
								<input type="checkbox" {...register("isActive")} />
							</div>
						</div>
					</div>
				</div>
				<div className="py-10 w-full flex flex-col justify-center items-center">
					<div className="w-1/2">
						<SubmitButton>ثبت محصول جدید</SubmitButton>
					</div>
				</div>
			</form>
		</div>
	);
}

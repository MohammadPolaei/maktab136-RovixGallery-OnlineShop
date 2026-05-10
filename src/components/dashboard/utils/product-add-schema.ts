import { z } from "zod";

export const CategoryEnum = z.enum(["watch", "smartwatch", "accessory"], {
	error: "دسته‌بندی انتخاب‌شده معتبر نیست",
});

export const GenderEnum = z.enum(["مردانه", "زنانه", "فاقد جنسیت"], {
	error: "جنسیت انتخاب‌شده معتبر نیست",
});

const ImageSchema = z
	.instanceof(File, {
		error: "فایل تصویر معتبر نیست",
	})
	.refine((file) => file.size <= 5 * 1024 * 1024, {
		message: "حداکثر حجم تصویر باید ۵ مگابایت باشد",
	})
	.refine(
		(file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
		{
			message: "فرمت تصویر باید jpg، png یا webp باشد",
		}
	);

export const ProductAddSchema = z.object({
	name: z
		.string({ error: "نام محصول الزامی است" })
		.trim()
		.min(3, { message: "نام محصول باید حداقل ۳ کاراکتر باشد" })
		.max(50, { message: "نام محصول نمی‌تواند بیشتر از ۵۰ کاراکتر باشد" }),

	description: z
		.string({ error: "توضیحات محصول الزامی است" })
		.trim()
		.min(10, { message: "توضیحات محصول باید حداقل ۱۰ کاراکتر باشد" })
		.max(2000, {
			message: "توضیحات محصول نمی‌تواند بیشتر از ۲۰۰۰ کاراکتر باشد",
		}),

	price: z.coerce
		.number({ error: "قیمت باید عدد باشد" })
		.int({ message: "قیمت باید عدد صحیح باشد" })
		.min(10000, { message: "حداقل قیمت محصول ۱۰٬۰۰۰ تومان است" }),

	brand: z
		.string({ error: "وارد کردن برند الزامی است" })
		.trim()
		.min(2, { message: "نام برند باید حداقل ۲ کاراکتر باشد" })
		.max(50, { message: "نام برند نمی‌تواند بیشتر از ۵۰ کاراکتر باشد" }),

	brandCountry: z
		.string({ error: "وارد کردن کشور سازنده الزامی است" })
		.trim()
		.min(2, { message: "نام کشور باید حداقل ۲ کاراکتر باشد" })
		.max(20, { message: "نام کشور نمی‌تواند بیشتر از ۲۰ کاراکتر باشد" }),

	gender: GenderEnum,

	material: z
		.string({ error: "وارد کردن جنس محصول الزامی است" })
		.trim()
		.min(2, { message: "جنس محصول باید حداقل ۲ کاراکتر باشد" })
		.max(20, { message: "جنس محصول نمی‌تواند بیشتر از ۲۰ کاراکتر باشد" }),

	color: z
		.string({ error: "وارد کردن رنگ محصول الزامی است" })
		.trim()
		.min(2, { message: "رنگ محصول باید حداقل ۲ کاراکتر باشد" })
		.max(20, { message: "رنگ محصول نمی‌تواند بیشتر از ۲۰ کاراکتر باشد" }),

	dialColor: z
		.string({ error: "وارد کردن رنگ صفحه الزامی است" })
		.trim()
		.min(2, { message: "رنگ صفحه باید حداقل ۲ کاراکتر باشد" })
		.max(30, { message: "رنگ صفحه نمی‌تواند بیشتر از ۳۰ کاراکتر باشد" }),

	isAuthentic: z.boolean(),

	stock: z.coerce
		.number({ error: "موجودی باید عدد باشد" })
		.int({ message: "موجودی باید عدد صحیح باشد" })
		.min(0, { message: "موجودی نمی‌تواند منفی باشد" })
		.max(9999, { message: "حداکثر موجودی ۹۹۹۹ است" }),

	popularity: z.coerce
		.number({ error: "محبوبیت باید عدد باشد" })
		.int({ message: "محبوبیت باید عدد صحیح باشد" })
		.min(0, { message: "محبوبیت نمی‌تواند کمتر از ۰ باشد" })
		.max(100, { message: "محبوبیت نمی‌تواند بیشتر از ۱۰۰ باشد" }),

	category: CategoryEnum,

	images: z
		.array(ImageSchema)
		.min(1, { message: "حداقل یک تصویر برای محصول لازم است" })
		.max(6, { message: "حداکثر می‌توانید ۶ تصویر بارگذاری کنید" }),

	isActive: z.boolean().default(true),
});

export type ProductAddSchemaType = z.input<typeof ProductAddSchema>;

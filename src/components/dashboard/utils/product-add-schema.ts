import { z } from "zod";

/* enums */

export const CategoryEnum = z.enum(["watch"], {
	message: "دسته‌بندی را انتخاب کنید",
});

export const GenderEnum = z.enum(["مردانه", "زنانه", "فاقد جنسیت"], {
	message: "جنسیت محصول را انتخاب کنید",
});

export const BrandEnum = z.enum(
	[
		"Citizen",
		"Omega",
		"Orient",
		"Casio",
		"Seiko",
		"Tag Heuer",
		"Rolex",
		"Hamilton",
		"Longines",
		"Tissot",
	],
	{
		message: "برند را انتخاب کنید",
	}
);

export const BrandCountryEnum = z.enum(["ژاپن", "سوئیس"], {
	message: "کشور سازنده را انتخاب کنید",
});

export const MaterialEnum = z.enum(
	["چرم", "لاستیک", "تیتانیوم", "استیل ضد زنگ"],
	{ message: "جنس بند را انتخاب کنید" }
);

export const ColorEnum = z.enum(["مشکی", "آبی", "نقره ای", "قهوه ای"], {
	message: "رنگ بدنه را انتخاب کنید",
});

export const DialColorEnum = z.enum(["مشکی", "سبز", "آبی", "سفید"], {
	message: "رنگ صفحه را انتخاب کنید",
});

/* image */

const ImageSchema = z
	.instanceof(File, { message: "فایل تصویر معتبر نیست" })
	.refine((file) => file.size <= 5 * 1024 * 1024, "حداکثر حجم تصویر ۵MB است");

/* schema */

export const ProductAddSchema = z.object({
	name: z
		.string()
		.min(3, "نام محصول حداقل ۳ کاراکتر باشد")
		.max(100, "نام محصول خیلی طولانی است"),

	description: z.string().min(10, "توضیحات حداقل ۱۰ کاراکتر باشد").max(2000),

	price: z.coerce.number().min(1000, "قیمت معتبر نیست"),

	stock: z.coerce.number().min(0, "موجودی معتبر نیست"),

	popularity: z.coerce.number().min(0).max(100),

	category: CategoryEnum,
	brand: BrandEnum,
	brandCountry: BrandCountryEnum,
	gender: GenderEnum,
	material: MaterialEnum,
	color: ColorEnum,
	dialColor: DialColorEnum,

	isAuthentic: z.boolean(),
	isActive: z.boolean(),

	images: z.array(ImageSchema).min(1, "حداقل یک تصویر لازم است"),
});

/* type */

export type ProductAddSchemaType = z.input<typeof ProductAddSchema>;

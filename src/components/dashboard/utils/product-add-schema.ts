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
	["چرم", "لاستیک", "تیتانیوم", "استیل ضدزنگ"],
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
	.refine((file) => file.size <= 5 * 1024 * 1024, {
		message: "حداکثر حجم تصویر ۵MB است",
	});

/* schema */

export const ProductAddSchema = z
	.object({
		name: z
			.string()
			.min(3, "نام محصول حداقل ۳ کاراکتر باشد")
			.max(100, "نام محصول خیلی طولانی است"),

		description: z
			.string()
			.min(10, "توضیحات حداقل ۱۰ کاراکتر باشد")
			.max(2000, "توضیحات خیلی طولانی است"),

		price: z.coerce
			.number()
			.refine((val) => !Number.isNaN(val), {
				message: "قیمت باید عدد باشد",
			})
			.min(1000, "قیمت باید حداقل ۱٬۰۰۰ ریال باشد"),

		stock: z.coerce
			.number()
			.refine((val) => !Number.isNaN(val), {
				message: "موجودی باید عدد باشد",
			})
			.int("موجودی باید عدد صحیح باشد")
			.min(0, "موجودی نمی‌تواند منفی باشد"),

		popularity: z.coerce
			.number()
			.refine((val) => !Number.isNaN(val), {
				message: "محبوبیت باید عدد باشد",
			})
			.int("محبوبیت باید عدد صحیح باشد")
			.min(0, "حداقل محبوبیت ۰ است")
			.max(100, "حداکثر محبوبیت ۱۰۰ است"),

		category: CategoryEnum,
		brand: BrandEnum,
		brandCountry: BrandCountryEnum,
		gender: GenderEnum,
		material: MaterialEnum,
		color: ColorEnum,
		dialColor: DialColorEnum,

		isAuthentic: z.boolean(),
		isActive: z.boolean(),

		images: z.array(z.any()).min(1, "حداقل یک تصویر لازم است"),
	})
	.superRefine((data, ctx) => {
		const hasExistingImages = data.images.some(
			(img) => typeof img === "string"
		);
		const hasNewFiles = data.images.some((img) => img instanceof File);

		if (!hasExistingImages && !hasNewFiles) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "حداقل یک تصویر باید وجود داشته باشد",
				path: ["images"],
			});
		}
	});

/* type */

export type ProductAddSchemaType = z.input<typeof ProductAddSchema>;

import { z } from "zod";

export const CategoryEnum = z.enum(["watch", "smartwatch", "accessory"]);

export const GenderEnum = z.enum(["مردانه", "زنانه", "فاقد جنسیت"]);

const ImagesSchema = z
	.instanceof(File)
	.refine((file) => file.size <= 5 * 1024 * 1024, "حداکثر حجم تصویر 5MB است")
	.refine(
		(file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
		"فرمت تصویر باید jpg, png یا webp باشد"
	);

export const ProductAddSchema = z.object({
	name: z.string().min(3).max(50),

	description: z.string().min(10).max(2000),

	price: z.number().int().min(10000),

	brand: z.string().min(2).max(50),

	brandCountry: z.string().min(2).max(20),

	gender: GenderEnum,

	material: z.string().min(2).max(20),

	color: z.string().min(2).max(20),

	dialColor: z.string().min(2).max(30),

	isAuthentic: z.boolean(),

	stock: z.number().int().min(0).max(9999),

	popularity: z.number().int().min(0).max(100),

	category: CategoryEnum,

	images: z
		.array(ImagesSchema)
		.min(1, "حداقل یک تصویر لازم است")
		.max(6, "حداکثر 6 تصویر مجاز است"),

	isActive: z.boolean().default(true),
});

export type ProductAddSchemaType = z.input<typeof ProductAddSchema>;

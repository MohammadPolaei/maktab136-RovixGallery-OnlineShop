import { z } from "zod";

export const addressSchema = z.object({
	province: z.string().min(1, "استان را انتخاب کنید"),
	city: z.string().min(1, "شهر را وارد کنید"),
	address: z.string().min(10, "آدرس باید کامل‌تر باشد"),
	postalCode: z.string().regex(/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد"),
	extraNote: z.string().optional(),
});

export type AddressFormValues = z.infer<typeof addressSchema>;

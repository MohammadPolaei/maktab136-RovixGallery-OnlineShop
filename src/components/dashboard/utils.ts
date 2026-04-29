import { z } from "zod";

export const adminLoginSchema = z.object({
	email: z.string().email("ایمیل معتبر نیست"),

	password: z.string().min(6, "پسورد باید حداقل ۶ کاراکتر باشد"),
});

export type AdminLoginFormData = z.infer<typeof adminLoginSchema>;

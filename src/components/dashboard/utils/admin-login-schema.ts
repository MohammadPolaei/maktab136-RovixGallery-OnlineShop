import { z } from "zod";

export const adminLoginSchema = z.object({
	email: z.string().email("ایمیل معتبر نیست"),

	password: z.string().min(6, "کلمه عبور را به درستی وارد کنید"),
});

export type AdminLoginFormData = z.infer<typeof adminLoginSchema>;

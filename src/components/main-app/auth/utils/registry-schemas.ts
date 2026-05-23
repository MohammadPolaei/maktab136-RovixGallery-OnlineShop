import { z } from "zod";

export const registerSchema = z
	.object({
		name: z.string().min(3, "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد"),
		email: z.string().email("ایمیل وارد شده معتبر نیست"),
		phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
		password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "رمز عبور مطابقت ندارد",
		path: ["confirmPassword"],
	});

export type RegisterInput = z.infer<typeof registerSchema>;

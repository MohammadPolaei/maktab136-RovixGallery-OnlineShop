import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email("ایمیل وارد شده معتبر نیست"),
	password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
});

export type LoginInput = z.infer<typeof loginSchema>;

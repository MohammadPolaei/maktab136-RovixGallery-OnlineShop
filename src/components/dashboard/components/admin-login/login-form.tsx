"use client";
import SubmitButton from "@/shared/components/base/buttons";
import { PasswordInput, TextInput } from "@/shared/components/base/inputs";

export default function LoginForm() {
	return (
		<div className="bg-white w-70 rounded-xl p-10 shadow-2xl fixed top-[25%] flex items-center justify-center sm:w-150">
			<form className="w-full flex flex-col justify-evenly items-center gap-3">
				<h1 className="text-xl text-(--color-dark-green) font-bold">
					ورود به پنل ادمین
				</h1>
				<p className="text-sm text-(--color-subheading)">
					خوش آمدید . لطفا برای ادامه وارد شوید
				</p>
				<TextInput
					label="نام کاربری"
					name="username"
					placeholder="نام کاربری را وارد کنید"
				/>
				<PasswordInput
					label="کلمه عبور"
					name="password"
					placeholder="کلمه عبور را وارد کنید"
				/>
				<SubmitButton>ورود به حساب کاربری</SubmitButton>
			</form>
		</div>
	);
}

export default function LoginForm() {
	return (
		<div className="bg-white w-150 rounded-xl p-10 shadow-2xl fixed top-[25%] flex items-center justify-center">
			<form className="w-full flex flex-col justify-evenly items-center gap-3">
				<h1 className="text-md text-(--color-dark-green) font-semibold">
					ورود به پنل ادمین
				</h1>
				<p className="text-sm text-(--color-subheading)">
					خوش آمدید . لطفا برای ادامه وارد شوید
				</p>
				<div className="w-full flex flex-col gap-1">
					<label className="text-sm text-(--color-dark-green) font-semibold">
						ایمیل
					</label>
					<input
						className="px-1 py-2 outline-0 border border-(--color-gold)/50 rounded-md text-sm text-(--color-subheading)"
						type="text"
						alt="username"
						placeholder="ایمیل خود را وارد کنید"
					/>
				</div>
				<div className="w-full flex flex-col gap-1">
					<label className="text-sm text-(--color-dark-green) font-semibold">
						رمز عبور
					</label>
					<input
						className="px-1 py-2 outline-0 border border-(--color-gold)/50 rounded-md text-sm text-(--color-subheading)"
						type="password"
						alt="password"
						placeholder="رمز عبور را وارد کنید"
					/>
				</div>
				<button className="w-full bg-(--color-dark-green) rounded-md py-3 text-sm text-(--color-gold) font-semibold cursor-pointer">
					ورود به حساب کاربری
				</button>
			</form>
		</div>
	);
}

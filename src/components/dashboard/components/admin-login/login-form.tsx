export default function LoginForm() {
	return (
		<div className="rounded-xl p-2 container">
			<form className="flex flex-col">
				<h1>ورود به پنل ادمین</h1>
				<label>نام کاربری</label>
				<input type="text" alt="username" placeholder="username" />
				<label>رمز عبور</label>
				<input type="password" alt="password" placeholder="password" />
				<button>ورود به حساب کاربری</button>
			</form>
		</div>
	);
}

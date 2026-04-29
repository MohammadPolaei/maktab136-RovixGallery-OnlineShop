import LoginForm from "./login-form";

export default function AdminLogin() {
	return (
		<div className="h-screen flex flex-col justify-center items-center bg-(--color-accent-green)/20">
			<LoginForm />
		</div>
	);
}

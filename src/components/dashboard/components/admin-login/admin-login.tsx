import backgroundImage from "@/assets/img/auth-background.jpg";
import LoginForm from "./login-form";

export default function AdminLogin() {
	return (
		<div>
			<div
				className="h-screen flex flex-col justify-center items-center bg-(--color-darkest) blur-3xl lg:blur-xl xl:blur-sm"
				style={{
					backgroundImage: `url(${backgroundImage.src})`,
					backgroundSize: "1980px 1000px",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			></div>
			<div className="flex flex-col justify-center items-center">
				<LoginForm />
			</div>
		</div>
	);
}

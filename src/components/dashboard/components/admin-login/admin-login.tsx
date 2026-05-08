import backgroundImage from "@/assets/img/auth-background.jpg";
import LoginForm from "./login-form";

export default function AdminLogin() {
	return (
		<div>
			<div
				className="h-screen flex flex-col justify-center items-center blur-3xl lg:blur-xl"
				style={{
					backgroundImage: `url(${backgroundImage.src}),
				radial-gradient(circle at center,#fff,#f8fcfa)
				`,
					backgroundSize: "cover , cover",
					backgroundPosition: "center , center",
					backgroundRepeat: "no-repeat , no-repeat",
					backgroundBlendMode: "unset",
				}}
			></div>
			<div className="flex flex-col justify-center items-center">
				<LoginForm />
			</div>
		</div>
	);
}

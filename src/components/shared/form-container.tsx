import bgTexture from "@/assets/img/login-texture.webp";
import React from "react";

export default function FormContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			style={{
				backgroundImage: `
				url(${bgTexture.src}),
				radial-gradient(circle at center,#fff,#f8fcfa)
				`,
				backgroundSize: "cover , cover",
				backgroundPosition: "center , center",
				backgroundRepeat: "no-repeat , no-repeat",
				backgroundBlendMode: "color-burn",
			}}
			className="w-full md:w-150 h-full md:h-fit md:rounded-xl shadow-2xl fixed top-0 md:top-[20%] flex items-center justify-center"
		>
			<div className="backdrop-blur-[2px] rounded-xl w-full md:w-150 h-full md:h-fit px-2 py-10 md:px-10 flex justify-center items-center">
				{children}
			</div>
		</div>
	);
}

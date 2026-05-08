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
				backgroundImage: `url(${bgTexture.src})`,
				backgroundSize: "50% 50%",
				backgroundPosition: "center",
				backgroundRepeat: "repeat",
			}}
			className="bg-white w-full md:w-150 h-full md:h-fit md:rounded-xl shadow-2xl fixed top-0 md:top-[20%] flex items-center justify-center"
		>
			<div className="backdrop-blur-md rounded-xl w-full md:w-150 h-full md:h-fit px-2 py-10 md:px-10 flex justify-center items-center">
				{children}
			</div>
		</div>
	);
}

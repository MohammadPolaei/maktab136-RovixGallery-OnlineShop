import React from "react";

export default function FormContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-white w-70 rounded-xl p-10 shadow-2xl fixed top-[25%] flex items-center justify-center sm:w-150">
			{children}
		</div>
	);
}

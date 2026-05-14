import React from "react";
import ShowDate from "./show-date";

export default function MainAppHeaderContainer({
	brand = "",
	flexClass,
	children,
	extraClasses,
}: {
	brand?: string;
	flexClass: "flex-row" | "flex-col md:flex-row";
	children: React.ReactNode;
	extraClasses?: string;
}) {
	return (
		<h1
			className={`${
				extraClasses ? extraClasses : ""
			} flex ${flexClass} justify-between items-center text-sm md:text-lg text-white bg-(--color-dark-green) rounded-xl p-2 px-8 shadow-md sticky top-0 backdrop-blur-lg z-5`}
		>
			<div className="flex justify-center items-center gap-2">
				{children}
				<span className="text-[14px] text-white/60">{`${brand}`}</span>
			</div>
			<ShowDate />
		</h1>
	);
}

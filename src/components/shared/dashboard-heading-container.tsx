import React from "react";
import ShowDate from "./show-date";

export default function DashboardHeadingContainer({
	closeFn,
	flexClass,
	children,
	extraClasses,
}: {
	closeFn?: () => void;
	flexClass: "flex-row" | "flex-col md:flex-row";
	children: React.ReactNode;
	extraClasses?: string;
}) {
	return (
		<h1
			className={`${
				extraClasses ? extraClasses : ""
			} flex ${flexClass} justify-between items-center text-sm md:text-lg font-semibold text-(--color-gold) bg-(--color-dark-green) rounded-xl p-2 px-8 shadow-md sticky top-0 backdrop-blur-lg z-5`}
		>
			{children}
			<div className={`flex justify-center items-center gap-2`}>
				<ShowDate />
				<button
					className={`${
						closeFn ? "flex" : "hidden"
					}  text-[10px] border border-gray-400 py-1 px-2 rounded-lg text-white cursor-pointer hover:bg-gray-500`}
					onClick={closeFn}
				>
					✖
				</button>
			</div>
		</h1>
	);
}

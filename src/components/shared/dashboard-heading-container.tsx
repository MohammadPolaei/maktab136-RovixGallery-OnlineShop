import React from "react";
import ShowDate from "./show-date";

export default function DashboardHeadingContainer({
	flexClass,
	children,
	extraClasses,
}: {
	flexClass: "flex-row" | "flex-col";
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
			<ShowDate />
		</h1>
	);
}

import React from "react";
import ShowDate from "./show-date";

export default function DashboardHeadingContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h1 className="flex flex-row justify-between items-center text-sm md:text-lg font-semibold text-(--color-gold) bg-(--color-dark-green) rounded-xl p-2 px-8 shadow-md sticky top-0 backdrop-blur-lg z-5">
			{children}
			<ShowDate />
		</h1>
	);
}

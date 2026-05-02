import React from "react";
// header
export function FooterMainSinglePartHeader({
	children,
}: {
	children: React.ReactNode;
}) {
	return <h2 className="text-sm mb-4 flex flex-row gap-1">{children}</h2>;
}
// description container
export function FooterMainSinglePartDescriptionContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full flex flex-col justify-center items-start pr-5 gap-2">
			{children}
		</div>
	);
}
// description
export function FooterMainSinglePartDescription({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex justify-center items-center gap-1 text-[12px] text-gray-400">
			{children}
		</div>
	);
}
// main part
export function FooterMainSinglePart({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full flex flex-col justify-center items-start p-5 rounded-2xl hover:bg-(--color-dark-green) transition-all duration-800 ease-in-out">
			{children}
		</div>
	);
}

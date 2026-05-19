import React from "react";

export default function SelectFilter({
	children,
	title,
	icon,
}: {
	children: React.ReactNode;
	title: string;
	icon: any;
}) {
	return (
		<div className="flex flex-col gap-2">
			<div className="w-full flex items-center justify-start gap-1">
				{icon}
				<label className="text-[10px] font-bold text-(--color-accent-green)">
					{title}
				</label>
			</div>
			{children}
		</div>
	);
}

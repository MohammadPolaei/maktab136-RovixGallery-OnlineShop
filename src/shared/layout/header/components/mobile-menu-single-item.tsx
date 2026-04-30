"use client";

import { MobileMenuSingleItemType } from "@/shared/types";
import Link from "next/link";

export default function MobileMenuSingleItem({
	setActive,
	active,
	href,
	icon,
	title,
}: MobileMenuSingleItemType) {
	return (
		<Link
			onClick={() => setActive(title)}
			title={title}
			className={`${
				active == title &&
				"py-3 mb-8 z-10 text-white bg-radial from-(--color-gold)/30 to-(--color-gold-dark)/50 rounded-xl backdrop-blur-2xl"
			} text-[8px] flex flex-col justify-center items-center gap-1 rounded-t-3xl active:text-white active:scale-150 origin-center transition-all ease-in-out duration-500`}
			href={href}
		>
			<div className="w-12 h-10 flex flex-col items-center justify-center">
				{icon}
				{title}
			</div>
		</Link>
	);
}

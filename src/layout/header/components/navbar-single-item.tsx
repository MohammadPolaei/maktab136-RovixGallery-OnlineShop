import { NavbarSingleItemsType } from "@/types/header-type";
import Link from "next/link";

export default function NavbarSingleItem({
	extraClasses,
	href,
	title,
	icon,
}: NavbarSingleItemsType) {
	return (
		<Link
			title={title}
			href={href}
			className="rovix-link transition-all ease-in-out duration-500"
		>
			<div
				className={`${extraClasses} px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] active:text-white origin-center transition-all ease-in-out duration-500`}
			>
				{icon}
				{title}
			</div>
		</Link>
	);
}

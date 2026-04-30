import { NavbarSingleItemsType } from "@/shared/types";
import Link from "next/link";

export default function NavbarSingleItem({
	href,
	title,
	icon,
}: NavbarSingleItemsType) {
	return (
		<Link
			href={href}
			className="rovix-link transition-all ease-in-out duration-500"
		>
			<div className="px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
				{icon}
				{title}
			</div>
		</Link>
	);
}

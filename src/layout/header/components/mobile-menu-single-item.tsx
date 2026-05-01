import { NavbarSingleItemsType } from "@/types/header-type";
import Link from "next/link";

export default function MobileMenuSingleItem({
	extraClasses,
	href,
	title,
	icon,
}: NavbarSingleItemsType) {
	return (
		<Link
			title={title}
			className={`${extraClasses} text-[8px] flex flex-col justify-center items-center gap-1 rounded-t-3xl active:text-white active:scale-150 origin-center transition-all ease-in-out duration-500`}
			href={href}
		>
			<div className="w-12 h-10 flex flex-col items-center justify-center">
				{icon}
				{title}
			</div>
		</Link>
	);
}

import { NavbarSingleItemsType } from "@/types/header-type";
import Link from "next/link";
import { RadixNavabrMenu } from "./radix-navbar-menu";

export default function MobileMenuSingleItem({
	childData,
	hasModal,
	extraClasses,
	href,
	title,
	icon,
}: NavbarSingleItemsType) {
	return (
		<>
			{hasModal ? (
				<RadixNavabrMenu
					trigger={
						<button
							title={title}
							className="transition-all ease-in-out duration-500 relative z-100"
						>
							<div
								className={`${extraClasses} text-[8px] flex flex-col justify-center items-center gap-1 rounded-t-3xl active:text-white active:scale-150 origin-center transition-all ease-in-out duration-500`}
							>
								<div className="w-12 h-10 flex flex-col items-center justify-center">
									{icon}
									{title}
								</div>
							</div>
						</button>
					}
					align="center"
					closeOnInteract={true}
					key={title}
					contentClassName="w-64 p-3 rovix-bg-darkest rounded-sm border border-[rgba(255,215,0,0.25)] text-(--color-gold) z-600"
				>
					{childData}
				</RadixNavabrMenu>
			) : (
				<Link
					title={title}
					className={`${extraClasses} text-[8px] flex flex-col justify-center items-center gap-1 rounded-t-3xl active:text-white active:scale-150 origin-center transition-all ease-in-out duration-500 z-100`}
					href={href}
				>
					<div className="w-12 h-10 flex flex-col items-center justify-center">
						{icon}
						{title}
					</div>
				</Link>
			)}
		</>
	);
}

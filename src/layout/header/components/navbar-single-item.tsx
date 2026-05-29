import { NavbarSingleItemsType } from "@/types/header-type";
import Link from "next/link";
import { RadixNavabrMenu } from "./radix-navbar-menu";

export default function NavbarSingleItem({
	hasModal,
	extraClasses,
	href,
	title,
	icon,
	childData,
}: NavbarSingleItemsType) {
	return (
		<>
			{hasModal ? (
				<RadixNavabrMenu
					side="bottom"
					align="center"
					sideOffset={10}
					showArrow={false}
					closeOnInteract
					trigger={
						<button
							title={title}
							className="rovix-link transition-all ease-in-out duration-500 cursor-pointer relative"
						>
							<div
								className={`${extraClasses} group px-3 py-3 rounded-sm flex items-center justify-between gap-2 text-center bg-linear-0 hover:from-transparent hover:to-[#0f3b2e] active:text-white origin-center transition-all ease-in-out duration-500`}
							>
								{icon}
								{title}
								<span className="transition-transform duration-300 group-open:rotate-180">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="m6 9 6 6 6-6" />
									</svg>
								</span>
							</div>
						</button>
					}
					contentClassName="w-64 p-3 rovix-bg-darkest rounded-sm border border-[rgba(255,215,0,0.25)] text-(--color-gold) z-600"
				>
					{childData}
				</RadixNavabrMenu>
			) : (
				<Link
					href={href}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div
						className={`${extraClasses} px-3 py-3 rounded-sm flex items-center justify-between gap-2 text-center bg-linear-0 hover:from-transparent hover:to-[#0f3b2e] active:text-white origin-center transition-all ease-in-out duration-500`}
					>
						{icon}
						{title}
					</div>
				</Link>
			)}
		</>
	);
}

import { NavbarSingleItemsType } from "@/types/header-type";
import Link from "next/link";
import { useState } from "react";
import NavModal from "./nav-modal";

export default function NavbarSingleItem({
	hasModal,
	extraClasses,
	href,
	title,
	icon,
}: NavbarSingleItemsType) {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			{hasModal ? (
				<>
					<button
						title={title}
						onClick={() => setOpenModal!(!openModal)}
						className="rovix-link transition-all ease-in-out duration-500 cursor-pointer relative"
					>
						<div
							className={`${extraClasses} group px-3 py-2 rounded-sm flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] active:text-white origin-center transition-all ease-in-out duration-500`}
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
					{openModal && <NavModal responsive="desktop" />}
				</>
			) : (
				<Link
					title={title}
					href={href}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div
						className={`${extraClasses} px-3 py-2 rounded-sm flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] active:text-white origin-center transition-all ease-in-out duration-500`}
					>
						{icon}
						{title}
					</div>
				</Link>
			)}
		</>
	);
}

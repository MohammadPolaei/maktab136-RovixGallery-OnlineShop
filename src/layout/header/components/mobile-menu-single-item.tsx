import { NavbarSingleItemsType } from "@/types/header-type";
import Link from "next/link";
import { useState } from "react";
import NavModal from "./nav-modal";

export default function MobileMenuSingleItem({
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
					{openModal && <NavModal responsive="mobile" />}
				</>
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

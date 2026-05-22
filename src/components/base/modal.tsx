import { useEffect, useRef } from "react";
import DashboardHeadingContainer from "../shared/dashboard-heading-container";
type ModalProps = {
	modalUsecaseType: "message" | "form" | "free";
	open: boolean | Error;
	setOpen: (open: boolean) => void;
	modalTitle?: string;
	children: React.ReactNode;
	extraClasses?: string;
};
export default function Modal({
	modalUsecaseType,
	modalTitle,
	extraClasses,
	open,
	setOpen,
	children,
}: ModalProps) {
	const backdropRef = useRef<HTMLDivElement>(null);

	// close on ESC
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};

		if (open) {
			document.addEventListener("keydown", handleEsc);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEsc);
			document.body.style.overflow = "auto";
		};
	}, [open, setOpen]);

	// close on backdrop click
	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === backdropRef.current) {
			setOpen(false);
		}
	};

	if (!open) return null;
	return (
		<div
			ref={backdropRef}
			onClick={handleBackdropClick}
			className={`${
				open
					? "fixed inset-0 w-full h-full bg-black/50 backdrop-blur-[5px] z-50"
					: "h-0 bg-black/0"
			} transition-all duration-300 ease-in-out`}
		>
			<div className="">
				<div
					className={`fixed ${extraClasses} ${
						modalUsecaseType == "message"
							? "top-[40%] button-[40%] left-[15%] right-[15%] md:left-[35%] md:right-[35%]"
							: modalUsecaseType == "form"
							? "inset-[1%] md:inset-[15%]"
							: ""
					} z-60 bg-gray-100 rounded-sm shadow shadow-black/5 py-5 overflow-y-auto`}
				>
					<div
						className={`flex flex-col justify-evenly items-center gap-2 ${
							modalUsecaseType === "form" ? "pt-10" : "py-1"
						}`}
					>
						{children}
					</div>
					<div
						className={`${
							modalUsecaseType !== "message"
								? "fixed inset-[0%] md:top-[15%] mx-auto h-20 flex flex-col justify-evenly items-center bg-white rounded-b-sm md:rounded-sm md:w-[70%] shadow shadow-black/5"
								: "hidden"
						} `}
					>
						<DashboardHeadingContainer
							closeFn={() => setOpen(false)}
							extraClasses="w-full"
							flexClass="flex-col md:flex-row"
						>
							{modalTitle}
						</DashboardHeadingContainer>
					</div>
				</div>
			</div>
		</div>
	);
}

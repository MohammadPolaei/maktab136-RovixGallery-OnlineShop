import { useEffect, useRef } from "react";
type ModalProps = {
	open: boolean | Error;
	setOpen: (open: boolean) => void;
	children: React.ReactNode;
	extraClasses: string;
};
export default function Modal({
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
					className={`fixed ${extraClasses} z-60 bg-white rounded-md shadow flex flex-col justify-evenly items-center gap-2 overflow-y-auto`}
				>
					{children}
					<button
						className="absolute top-2 right-2 text-[12px] bg-gray-400 p-2 rounded-sm text-white cursor-pointer hover:bg-gray-500"
						onClick={() => setOpen(false)}
					>
						بستن
					</button>
				</div>
			</div>
		</div>
	);
}

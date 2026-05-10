import { useEffect, useRef } from "react";
type ModalProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	children: React.ReactNode;
};
export default function Modal({ open, setOpen, children }: ModalProps) {
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
					? "fixed inset-0 w-full h-full bg-black/30 backdrop-blur-[2px] z-50"
					: "h-0 bg-black/0"
			} transition-all duration-300 ease-in-out`}
		>
			<div className="">
				<div className="fixed inset-[10%] z-60 w-3/4 h-3/4 bg-white rounded-md shadow flex flex-col justify-evenly items-center gap-2">
					{children}
					<button onClick={() => setOpen(false)}>بستن</button>
				</div>
			</div>
		</div>
	);
}

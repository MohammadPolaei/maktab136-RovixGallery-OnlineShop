import Modal from "./modal";
type ModalProps = {
	theQuestion: string;
	confirmQuestion: boolean;
	setConfirmQuestion: (Q: boolean) => void;
	openDelete: boolean;
	setOpenDelete: (open: boolean) => void;
};
export default function AskModal({
	theQuestion,
	setConfirmQuestion,
	openDelete,
	setOpenDelete,
}: ModalProps) {
	const handleConfirmYes = () => {
		setConfirmQuestion(true);
		setOpenDelete(false);
	};
	const handleConfirmNo = () => {
		setConfirmQuestion(false);
		setOpenDelete(false);
	};

	return (
		<Modal
			extraClasses="inset-[1%] md:inset-[40%]"
			open={openDelete}
			setOpen={setOpenDelete}
		>
			<div className="w-full flex flex-col justify-center items-center gap-5">
				<div className="text-center text-[10px] text-black/70">
					{theQuestion}
				</div>
				<div className="w-full flex justify-center items-center gap-3">
					<button
						onClick={handleConfirmNo}
						className="p-2 text-[10px] rounded-sm bg-gray-400"
					>
						خیر
					</button>
					<button
						onClick={handleConfirmYes}
						className="p-2 text-[10px] rounded-sm bg-red-400"
					>
						بله
					</button>
				</div>
			</div>
		</Modal>
	);
}

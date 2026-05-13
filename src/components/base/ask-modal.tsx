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
		<Modal modalUsecaseType="message" open={openDelete} setOpen={setOpenDelete}>
			<div className="w-full flex flex-col justify-center items-center gap-5">
				<div className="text-center text-[12px] text-black/70 pt-10">
					{theQuestion}
				</div>
				<div className="w-full flex justify-center items-center gap-3">
					<button
						onClick={handleConfirmNo}
						className="p-2 px-3 text-[10px] rounded-sm bg-gray-400 text-white cursor-pointer"
					>
						خیر
					</button>
					<button
						onClick={handleConfirmYes}
						className="p-2 px-3 text-[10px] rounded-sm bg-red-400 text-white cursor-pointer"
					>
						بله
					</button>
				</div>
			</div>
		</Modal>
	);
}

type ProductAdd = {
	setOpen: () => void;
};

export default function ProductAdd({ setOpen }: ProductAdd) {
	return (
		<div
			onClick={setOpen}
			className="w-full lg:w-1/4 flex justify-center items-center px-3 h-9 rounded-sm cursor-pointer bg-(--color-accent-green) text-(--color-bg) hover:text-(--color-gold) text-[12px] transition-all duration-300 ease-in-out"
		>
			افزودن محصول جدید +
		</div>
	);
}

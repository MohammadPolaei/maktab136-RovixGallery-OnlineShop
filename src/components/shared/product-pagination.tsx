"use client";

import { TextInput } from "../base/inputs";

type PaginationProps = {
	currentPage: number;
	totalPages: number | 1;
	setPage: (page: number) => void;
};

export default function ProductPagination({
	currentPage = 1,
	totalPages,
	setPage,
}: PaginationProps) {
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<div className="w-full flex flex-row justify-center items-center gap-0 md:gap-2  text-[10px] md:text-sm">
			<button
				onClick={() => setPage(1)}
				disabled={currentPage === 1}
				className="w-8 h-9 mx-1 rounded-md cursor-pointer text-[10px] text-(--color-bg) bg-(--color-accent-green) hover:bg-(--color-dark-green) hover:text-(--color-gold) disabled:text-black/60 disabled:bg-(--color-accent-green)/20 disabled:cursor-auto disabled:opacity-30"
			>
				اول
			</button>

			<button
				onClick={() => setPage(currentPage - 1)}
				disabled={currentPage === 1}
				className="w-8 h-9 mx-1 rounded-md cursor-pointer text-[10px] text-(--color-bg) bg-(--color-accent-green) hover:bg-(--color-dark-green) hover:text-(--color-gold) disabled:text-black/60 disabled:bg-(--color-accent-green)/20 disabled:cursor-auto disabled:opacity-30"
			>
				قبلی
			</button>

			<TextInput
				extraClasses="w-8 text-center"
				name="page"
				value={currentPage}
				onChange={(e) => setPage(Number(e.target.value))}
			/>

			<button
				onClick={() => setPage(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="w-8 h-9 mx-1 rounded-md cursor-pointer text-[10px] text-(--color-bg) bg-(--color-accent-green) hover:bg-(--color-dark-green) hover:text-(--color-gold) disabled:text-black/60 disabled:bg-(--color-accent-green)/20 disabled:cursor-auto disabled:opacity-30"
			>
				بعدی
			</button>

			<button
				onClick={() => setPage(totalPages)}
				disabled={currentPage === totalPages}
				className="w-8 h-9 mx-1 rounded-md cursor-pointer text-[10px] text-(--color-bg) bg-(--color-accent-green) hover:bg-(--color-dark-green) hover:text-(--color-gold) disabled:text-black/60 disabled:bg-(--color-accent-green)/20 disabled:cursor-auto disabled:opacity-30"
			>
				آخر
			</button>
		</div>
	);
}

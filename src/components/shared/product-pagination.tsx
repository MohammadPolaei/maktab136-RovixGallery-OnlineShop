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
				className="px-3 h-9 rounded-md cursor-pointer disabled:opacity-50"
			>
				اول
			</button>

			<button
				onClick={() => setPage(currentPage - 1)}
				disabled={currentPage === 1}
				className="px-3 h-9 rounded-md cursor-pointer disabled:opacity-50"
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
				className="px-3 h-9 rounded-md cursor-pointer disabled:opacity-50"
			>
				بعدی
			</button>

			<button
				onClick={() => setPage(totalPages)}
				disabled={currentPage === totalPages}
				className="px-3 h-9 rounded-md cursor-pointer disabled:opacity-50"
			>
				آخر
			</button>
		</div>
	);
}

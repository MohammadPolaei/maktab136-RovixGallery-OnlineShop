"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { TextInput } from "../base/inputs";

type PaginationProps = {
	currentPage: number;
	totalPages: number | 1;
	setPage?: (page: number) => void;
};

export default function ProductPagination({
	currentPage = 0,
	totalPages,
	setPage,
}: PaginationProps) {
	// If SSR

	const router = useRouter();
	const searchParams = useSearchParams();

	const goToPage = (page: number) => {
		if (page < 1 || page > totalPages) return;

		const params = new URLSearchParams(searchParams.toString());
		params.set("page", page.toString());

		router.push(`/products?${params.toString()}`);
	};

	return (
		<div className="w-full flex flex-row justify-center items-center gap-2 text-[10px] md:text-sm py-0">
			<button
				onClick={() => (setPage ? setPage(1) : goToPage(1))}
				disabled={currentPage <= 1}
				className="w-10 h-9 rounded-md cursor-pointer text-[10px] text-(--color-bg) bg-(--color-dark-green) hover:bg-(--color-accent-green) hover:text-(--color-gold) disabled:text-black/60 disabled:bg-(--color-accent-green)/20 disabled:cursor-auto disabled:opacity-30"
			>
				اول
			</button>

			<button
				onClick={() =>
					setPage ? setPage(currentPage - 1) : goToPage(currentPage - 1)
				}
				disabled={currentPage <= 1 || currentPage > totalPages}
				className="w-12 h-9 rounded-md cursor-pointer text-[10px] text-(--color-bg) bg-(--color-dark-green) hover:bg-(--color-accent-green) hover:text-(--color-gold) disabled:text-black/60 disabled:bg-(--color-accent-green)/20 disabled:cursor-auto disabled:opacity-30"
			>
				{"<<	قبلی "}
			</button>

			<TextInput
				type="number"
				extraClasses="w-10 text-center text-(--color-dark-green)"
				name="page"
				value={currentPage}
				onChange={(e) =>
					setPage
						? setPage(Number(e.target.value))
						: goToPage(Number(e.target.value))
				}
			/>

			<button
				onClick={() =>
					setPage ? setPage(currentPage + 1) : goToPage(currentPage + 1)
				}
				disabled={currentPage >= totalPages || currentPage > totalPages}
				className="w-12 h-9 rounded-md cursor-pointer text-[10px] text-(--color-bg) bg-(--color-dark-green) hover:bg-(--color-accent-green) hover:text-(--color-gold) disabled:text-black/60 disabled:bg-(--color-accent-green)/20 disabled:cursor-auto disabled:opacity-30"
			>
				{"بعدی >>"}
			</button>

			<button
				onClick={() => (setPage ? setPage(totalPages) : goToPage(totalPages))}
				disabled={currentPage >= totalPages}
				className="w-10 h-9 rounded-md cursor-pointer text-[10px] text-(--color-bg) bg-(--color-dark-green) hover:bg-(--color-accent-green) hover:text-(--color-gold) disabled:text-black/60 disabled:bg-(--color-accent-green)/20 disabled:cursor-auto disabled:opacity-30"
			>
				آخر
			</button>
		</div>
	);
}

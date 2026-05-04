"use client";
type PaginationProps = {
	currentPage: number;
	totalPages: number;
};

function onPageChange(page: number) {
	console.log(page);
}

export default function ProductPagination({
	currentPage = 1,
	totalPages,
}: PaginationProps) {
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<div className="w-full flex flex-wrap justify-center items-center gap-0 md:gap-2  text-[10px] md:text-sm">
			<button
				onClick={() => onPageChange(1)}
				disabled={currentPage === 1}
				className="px-3 h-9 rounded-md cursor-pointer disabled:opacity-50"
			>
				اول
			</button>

			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="px-3 h-9 rounded-md cursor-pointer disabled:opacity-50"
			>
				قبلی
			</button>

			{pages.map((page) => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					className={`px-3 h-9 rounded-md cursor-pointer ${
						currentPage === page ? "bg-(--color-dark-green) text-white" : ""
					}`}
				>
					{page}
				</button>
			))}

			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="px-3 h-9 rounded-md cursor-pointer disabled:opacity-50"
			>
				بعدی
			</button>

			<button
				onClick={() => onPageChange(totalPages)}
				disabled={currentPage === totalPages}
				className="px-3 h-9 rounded-md cursor-pointer disabled:opacity-50"
			>
				آخر
			</button>
		</div>
	);
}

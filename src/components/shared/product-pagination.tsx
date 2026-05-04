"use client";

export default function ProductPagination() {
	return (
		<div className="flex justify-center gap-2 mt-6">
			<button className="px-4 py-2 rounded border border-(--color-gold-dark) hover:bg-(--color-bg)">
				قبلی
			</button>

			<button className="px-4 py-2 rounded bg-(--color-gold)] text-[var(--color-dark-green) font-bold">
				1
			</button>

			<button className="px-4 py-2 rounded border border-[var(--color-gold-dark) hover:bg-[var(--color-bg)">
				بعدی
			</button>
		</div>
	);
}

"use client";

type Props = {
	filter:
		| "all"
		| "delivered"
		| "canceled"
		| "pending"
		| "confirmed"
		| "shipping";
	setFilter: (
		filter:
			| "all"
			| "delivered"
			| "canceled"
			| "pending"
			| "confirmed"
			| "shipping"
	) => void;
};
export default function OrdersFilters({ filter, setFilter }: Props) {
	return (
		<div className="flex gap-3 px-3">
			<button
				onClick={() => setFilter("all")}
				className={`px-4 py-2 rounded-sm text-sm cursor-pointer  
        ${
					filter === "all"
						? "bg-(--color-accent-green) text-white"
						: "bg-white border border-(--color-gold-dark) hover:bg-(--color-accent-green)/10"
				}`}
			>
				همه
			</button>

			<button
				onClick={() => setFilter("delivered")}
				className={`px-4 py-2 rounded-sm text-sm cursor-pointer  
        ${
					filter === "delivered"
						? "bg-(--color-accent-green) text-white"
						: "bg-white border border-(--color-gold-dark) hover:bg-(--color-accent-green)/10"
				}`}
			>
				تحویل داده شده
			</button>

			<button
				onClick={() => setFilter("canceled")}
				className={`px-4 py-2 rounded-sm text-sm cursor-pointer  
        ${
					filter === "canceled"
						? "bg-(--color-accent-green) text-white"
						: "bg-white border border-(--color-gold-dark) hover:bg-(--color-accent-green)/10"
				}`}
			>
				لغو شده
			</button>
		</div>
	);
}

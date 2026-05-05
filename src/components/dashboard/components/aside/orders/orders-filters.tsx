"use client";

type Props = {
	filter: "all" | "delivered" | "notDelivered";
	setFilter: (filter: "all" | "delivered" | "notDelivered") => void;
};
export default function OrdersFilters({ filter, setFilter }: Props) {
	return (
		<div className="flex gap-3">
			<button
				onClick={() => setFilter("all")}
				className={`px-4 py-2 rounded-md text-sm cursor-pointer  
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
				className={`px-4 py-2 rounded-md text-sm cursor-pointer  
        ${
					filter === "delivered"
						? "bg-(--color-accent-green) text-white"
						: "bg-white border border-(--color-gold-dark) hover:bg-(--color-accent-green)/10"
				}`}
			>
				تحویل داده شده
			</button>

			<button
				onClick={() => setFilter("notDelivered")}
				className={`px-4 py-2 rounded-md text-sm cursor-pointer  
        ${
					filter === "notDelivered"
						? "bg-(--color-accent-green) text-white"
						: "bg-white border border-(--color-gold-dark) hover:bg-(--color-accent-green)/10"
				}`}
			>
				تحویل داده نشده
			</button>
		</div>
	);
}

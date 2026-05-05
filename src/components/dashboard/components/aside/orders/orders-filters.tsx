"use client";

import { useState } from "react";

export default function OrdersFilters() {
	const [filter, setFilter] = useState("all");

	return (
		<div className="flex gap-3">
			<button
				onClick={() => setFilter("all")}
				className={`px-4 py-2 rounded-md text-sm
        ${
					filter === "all"
						? "bg-(--color-accent-green) text-white"
						: "bg-white border border-(--color-gold-dark)"
				}`}
			>
				همه
			</button>

			<button
				onClick={() => setFilter("delivered")}
				className={`px-4 py-2 rounded-md text-sm
        ${
					filter === "delivered"
						? "bg-(--color-accent-green) text-white"
						: "bg-white border border-(--color-gold-dark)"
				}`}
			>
				تحویل داده شده
			</button>

			<button
				onClick={() => setFilter("notDelivered")}
				className={`px-4 py-2 rounded-md text-sm
        ${
					filter === "notDelivered"
						? "bg-(--color-accent-green) text-white"
						: "bg-white border border-(--color-gold-dark)"
				}`}
			>
				تحویل داده نشده
			</button>
		</div>
	);
}

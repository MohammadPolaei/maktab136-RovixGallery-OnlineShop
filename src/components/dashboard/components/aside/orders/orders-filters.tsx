"use client";

import { OrderStatus } from "@/types/orders-type";
import { statusToPersian } from "@/utils/status-to-persian";
import { orderStatusFilter } from "./orders";

type Props = {
	filter: orderStatusFilter;
	setFilter: (filter: orderStatusFilter) => void;
};
export default function OrdersFilters({ filter, setFilter }: Props) {
	return (
		<div className="flex gap-3 px-3 w-full overflow-auto">
			{[
				"all",
				"delivered",
				"cancelled",
				"pending",
				"confirmed",
				"shipping",
			].map((item) => {
				return (
					<button
						key={item}
						onClick={() => setFilter(item as orderStatusFilter)}
						className={`px-4 py-2 rounded-sm text-sm cursor-pointer  
        ${
					filter === item
						? "bg-(--color-accent-green) text-white"
						: "bg-white hover:bg-(--color-accent-green)/10"
				}`}
					>
						{statusToPersian(item as OrderStatus).text == "نامشخص"
							? "همه"
							: statusToPersian(item as OrderStatus).text}
					</button>
				);
			})}
		</div>
	);
}

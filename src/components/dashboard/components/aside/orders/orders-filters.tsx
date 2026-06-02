"use client";

import { OrderStatus } from "@/types/orders-type";
import { statusToPersian } from "@/utils/status-to-persian";
import { Dispatch, SetStateAction } from "react";
import { OrderStatusFilter } from "./orders";

type Props = {
	filter: OrderStatusFilter;
	setFilter: (filter: OrderStatusFilter) => void;
	setPage: Dispatch<SetStateAction<number>>;
};
export default function OrdersFilters({ filter, setFilter, setPage }: Props) {
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
						onClick={() => {
							setFilter(item as OrderStatusFilter);
							setPage(1);
						}}
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

"use client";
import ProductPagination from "@/components/shared/product-pagination";
import { useState } from "react";
import OrdersFilters from "./orders-filters";
import OrdersTable from "./orders-table";

export default function Orders() {
	const [filter, setFilter] = useState<"all" | "delivered" | "notDelivered">(
		"all"
	);

	return (
		<section dir="rtl" className="px-6 py-8 space-y-6">
			<h1 className="text-2xl font-bold text-(--color-heading)">
				مدیریت سفارشات
			</h1>

			<OrdersFilters filter={filter} setFilter={setFilter} />

			<OrdersTable filter={filter} setFilter={setFilter} />

			<ProductPagination currentPage={1} totalPages={5} />
		</section>
	);
}

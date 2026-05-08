"use client";
import DashboardHeadingContainer from "@/components/shared/dashboard-heading-container";
import DashboardSectionsContainer from "@/components/shared/dashboard-sections-container";
import ProductPagination from "@/components/shared/product-pagination";
import { useState } from "react";
import OrdersTable from "../../../../shared/orders-table";
import OrdersFilters from "./orders-filters";

export default function Orders() {
	const [filter, setFilter] = useState<"all" | "delivered" | "notDelivered">(
		"all"
	);

	return (
		<section dir="rtl" className="px-4 py-8 space-y-6">
			<DashboardHeadingContainer>مدیریت سفارشات</DashboardHeadingContainer>
			<DashboardSectionsContainer extraClasses="pt-3">
				<OrdersFilters filter={filter} setFilter={setFilter} />
				<OrdersTable filter={filter} setFilter={setFilter} />
			</DashboardSectionsContainer>
			<ProductPagination currentPage={1} totalPages={1} setPage={() => {}} />
		</section>
	);
}

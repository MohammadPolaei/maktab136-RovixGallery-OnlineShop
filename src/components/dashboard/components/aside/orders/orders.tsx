"use client";

import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import DashboardHeadingContainer from "@/components/shared/dashboard-heading-container";
import DashboardSectionsContainer from "@/components/shared/dashboard-sections-container";
import ProductPagination from "@/components/shared/product-pagination";
import { useGetOrdersAdmin } from "@/hooks/use-get-orders";
import { useState } from "react";
import OrdersTable from "../../../../shared/orders-table";
import OrdersFilters from "./orders-filters";

export type OrderStatusFilter =
	| "all"
	| "delivered"
	| "cancelled"
	| "pending"
	| "confirmed"
	| "shipping";

export default function Orders() {
	const [filter, setFilter] = useState<OrderStatusFilter>("all");
	const [page, setPage] = useState<number>(1);

	const { adminOrders, isAdminLoading } = useGetOrdersAdmin({
		page,
		limit: 10,
		filter,
	});

	if (isAdminLoading) {
		return (
			<div className="w-full h-full">
				<RovixLuxuryLoader />
			</div>
		);
	}

	return (
		<section dir="rtl" className="px-4 py-8 space-y-6">
			<DashboardHeadingContainer flexClass="flex-row">
				مدیریت سفارشات
			</DashboardHeadingContainer>

			<DashboardSectionsContainer extraClasses="pt-3">
				<OrdersFilters
					filter={filter}
					setFilter={setFilter}
					setPage={setPage}
				/>
				<OrdersTable showType="admin" orders={adminOrders} />
			</DashboardSectionsContainer>

			<ProductPagination
				currentPage={adminOrders.page}
				totalPages={adminOrders.pages}
				setPage={setPage}
			/>
		</section>
	);
}

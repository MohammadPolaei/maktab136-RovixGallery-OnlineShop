"use client";

import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import DashboardHeadingContainer from "@/components/shared/dashboard-heading-container";
import DashboardSectionsContainer from "@/components/shared/dashboard-sections-container";
import ProductPagination from "@/components/shared/product-pagination";
import { useGetOrdersAdmin } from "@/hooks/use-get-orders";
import { useState } from "react";
import OrdersTable from "../../../../shared/orders-table";
import OrdersFilters from "./orders-filters";

export type orderStatusFilter =
	| "all"
	| "delivered"
	| "cancelled"
	| "pending"
	| "confirmed"
	| "shipping";

export default function Orders() {
	const [filter, setFilter] = useState<orderStatusFilter>("all");
	const [page, setPage] = useState<number>(1);

	const { adminOrders, isAdminLoading } = useGetOrdersAdmin({
		page,
		limit: 10,
	});

	const filteredOrders =
		filter === "all"
			? adminOrders?.data ?? []
			: filter === "delivered"
			? (adminOrders?.data ?? []).filter(
					(order: any) => order.status === "delivered"
			  )
			: filter === "cancelled"
			? (adminOrders?.data ?? []).filter(
					(order: any) => order.status == "cancelled"
			  )
			: filter === "pending"
			? (adminOrders?.data ?? []).filter(
					(order: any) => order.status == "pending"
			  )
			: filter === "confirmed"
			? (adminOrders?.data ?? []).filter(
					(order: any) => order.status == "confirmed"
			  )
			: (adminOrders?.data ?? []).filter(
					(order: any) => order.status == "shipping"
			  );

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
				<OrdersFilters filter={filter} setFilter={setFilter} />
				<OrdersTable
					showType="admin"
					orders={{
						...adminOrders,
						data: filteredOrders,
					}}
				/>
			</DashboardSectionsContainer>

			<ProductPagination
				currentPage={Number(adminOrders?.page ?? 1)}
				totalPages={Number(adminOrders?.pages ?? 1)}
				setPage={setPage}
			/>
		</section>
	);
}

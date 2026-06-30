"use client";
import OrdersTable from "@/components/shared/orders-table";
import { useGetOrders } from "@/hooks/use-get-orders";
import { OrdersListResponse } from "@/types/orders-type";

export default function UserOrdersSummary() {
	const ordersSummary = useGetOrders();

	const lastFiveOrders: OrdersListResponse = ordersSummary.orders
		? {
				success: ordersSummary.orders.data.success,
				count: ordersSummary.orders.data.count,
				data: ordersSummary.orders.data.filter(
					(order: any, index: number) =>
						order.status !== "delivered" && index < 3
				),
		  }
		: {
				success: false,
				count: 0,
				data: [],
		  };

	return (
		<div className="bg-white rounded-sm p-3">
			<div className="font-semibold pb-3">{"آخرین سفارشات"}</div>
			<OrdersTable showType="user" orders={lastFiveOrders} />
		</div>
	);
}

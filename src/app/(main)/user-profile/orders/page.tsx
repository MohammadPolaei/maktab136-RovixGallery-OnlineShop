"use client";
import OrdersTable from "@/components/shared/orders-table";
import { useOrders } from "@/utils/orders-context";

export default function page() {
	const { orders } = useOrders();
	return (
		<div className="w-full flex flex-col justify-start items-start overflow-auto">
			<OrdersTable orders={orders} />
		</div>
	);
}

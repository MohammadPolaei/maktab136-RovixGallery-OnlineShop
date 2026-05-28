"use client";
import OrdersTable from "@/components/shared/orders-table";
import { useGetOrders } from "@/hooks/use-get-orders";

export default function page() {
	const { orders } = useGetOrders();
	console.log(orders);

	return (
		<div className="w-full">
			<OrdersTable />
		</div>
	);
}

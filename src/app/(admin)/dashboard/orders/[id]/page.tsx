"use client";

import { useOrderStatusChange } from "@/components/dashboard/hooks/use-order-status-change";
import SingleOrderDetails from "@/components/shared/single-order-details";
import { useParams } from "next/navigation";

export default function OrderDetailPage() {
	const params = useParams<{ id: string }>();
	const id = params.id;

	const { updateOrder, updateOrderPending } = useOrderStatusChange();

	return (
		<SingleOrderDetails
			id={id}
			updateOrderPending={updateOrderPending}
			updateOrderFn={updateOrder}
			usageType="admin"
		/>
	);
}

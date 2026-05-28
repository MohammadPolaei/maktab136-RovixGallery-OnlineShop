"use client";

import { useOrderStatusChange } from "@/components/dashboard/hooks/use-order-status-change";
import SingleOrderDetails from "@/components/shared/single-order-details";
import { OrderStatus } from "@/types/orders-type";
import { useParams } from "next/navigation";

export default function OrderDetailPage() {
	const params = useParams<{ id: string }>();
	const id = params.id;

	const { updateOrder, updateOrderPending } = useOrderStatusChange();
	const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newStatus = e.target.value as OrderStatus;
		updateOrder!({ id, data: newStatus });
	};

	return (
		<SingleOrderDetails
			id={id}
			handleStatusChange={handleStatusChange}
			updateOrderPending={updateOrderPending}
			usageType="admin"
		/>
	);
}

import { OrderStatus } from "@/types/orders-type";

export async function orderStatusUpdate({
	id,
	statusPayload,
}: {
	id: string;
	statusPayload: OrderStatus;
}) {
	const payload = { status: statusPayload };
	const res = await fetch(`/api/orders/${id}/status`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});
	console.log(res);

	if (!res.ok) {
		throw new Error(res.statusText || "Error updating order status");
	}
	const data = await res.json();

	return data;
}

import { Order } from "@/types/orders-type";

// get all orders /user
export async function getOrders() {
	const res = await fetch("/api/orders", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		throw new Error("Error showing Orders");
	}

	const data = await res.json();

	return await data;
}

// add order from cart

export async function addOrder(payload: any) {
	const res = await fetch("/api/orders", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});

	if (!res.ok) {
		throw new Error("Error adding Order");
	}

	const data = await res.json();

	return data;
}

// single order
export async function getSingleOrder({
	id,
}: {
	id: string;
}): Promise<{ success: boolean; data: Order }> {
	const res = await fetch(`/api/orders/${id}`, {
		method: "GET",
	});

	const data = await res.json();

	if (!res.ok) {
		throw new Error(data?.message || "Error showing Order details");
	}

	return data;
}

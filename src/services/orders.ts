import { Order } from "@/types/orders-type";

type GetOrdersParams = {
	page?: number;
	limit?: number;
};

export async function getOrdersAdmin(params?: GetOrdersParams) {
	const page = params?.page ?? 1;
	const limit = params?.limit ?? 10;

	const res = await fetch(`/api/orders/admin?page=${page}&limit=${limit}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		throw new Error("Error showing Orders");
	}

	const data = await res.json();
	return data;
}

export async function getOrders(params?: GetOrdersParams) {
	const page = params?.page ?? 1;
	const limit = params?.limit ?? 10;

	const res = await fetch(`/api/orders?page=${page}&limit=${limit}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		throw new Error("Error showing Orders");
	}

	const data = await res.json();
	return data;
}

export async function addOrder(payload: unknown) {
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

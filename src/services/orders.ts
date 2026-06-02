import { Order } from "@/types/orders-type";

type GetOrdersParams = {
	page?: number;
	limit?: number;
	status?: any;
};

export async function getOrdersAdmin(params: GetOrdersParams) {
	const page = params.page;
	const limit = params.limit;
	const status = params.status;

	const res = await fetch(
		`/api/orders/admin?page=${page}&limit=${limit}&status=${status}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	if (!res.ok) {
		throw new Error("Error showing Orders");
	}

	const data = await res.json();
	return data;
}

export async function getOrders() {
	const res = await fetch(`/api/orders`, {
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
		cache: "no-cache",
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

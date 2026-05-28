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

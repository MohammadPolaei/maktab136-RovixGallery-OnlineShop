import { ProductFilters } from "@/types/filters-type";

export async function getProducts(filters: ProductFilters = {}) {
	try {
		const params = new URLSearchParams();

		Object.entries(filters).forEach(([key, value]) => {
			if (value !== undefined && value !== null && value !== "") {
				params.append(key, String(value));
			}
		});

		const url = `/api/product${
			params.toString() ? `?${params.toString()}` : ""
		}`;

		const res = await fetch(url, { method: "GET" });

		if (!res.ok) {
			throw new Error(`${res.statusText} : ${res.status}`);
		}

		return await res.json();
	} catch (error) {
		console.error("❌ GET PRODUCTS ERROR:", error);
		throw error;
	}
}

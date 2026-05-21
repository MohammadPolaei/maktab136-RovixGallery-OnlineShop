export async function getProductsSSR(query: Record<string, string>) {
	const page = query.page ?? "1";

	const params = new URLSearchParams({
		...query,
		page,
	});

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

	const res = await fetch(`${baseUrl}/api/product?${params.toString()}`, {
		cache: "no-store",
	});

	const data = await res.json();
	console.log(data);

	if (!res.ok) {
		console.error("Failed to fetch products:", res.status);
		throw new Error("Failed to fetch products");
	}

	return data.data;
}

import { Product } from "@/types/product-data-type";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface SingleProductResponse {
	success: boolean;
	data: Product;
}

export async function getProduct(id: string): Promise<Product> {
	const res = await fetch(`${baseUrl}/api/product/${id}`, {
		next: { revalidate: 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch product");
	}

	const json: SingleProductResponse = await res.json();

	return json.data;
}

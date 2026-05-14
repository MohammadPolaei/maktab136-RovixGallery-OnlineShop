import { ProductSearchParams } from "@/components/shared/products-filter-using-params";

export const buildQuery = (searchParams: ProductSearchParams) => {
	const query: Record<string, string> = {};

	Object.entries(searchParams).forEach(([key, value]) => {
		if (value && value !== "undefined") {
			query[key] = value;
		}
	});

	return query;
};

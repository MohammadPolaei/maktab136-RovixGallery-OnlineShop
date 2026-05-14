import ProductsList from "@/components/main-app/products-list/components/products-list";
import ProductPagination from "@/components/shared/product-pagination";
import ProductsFilterUsingParams from "@/components/shared/products-filter-using-params";
import { getProductsSSR } from "@/services/get-products-by-params";
import { Product } from "@/types/product-data-type";
import { buildQuery } from "@/utils/build-query";

export default async function ProductsPage({
	searchParams,
}: {
	searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
	const resolvedSearchParams = await searchParams;

	const query = buildQuery(resolvedSearchParams);

	const { data, pages, page } = await getProductsSSR(query);

	// reSetting products image by currecting URL
	const products = data.map((prod: Product) => ({
		...prod,
		images: prod.images.map(
			(img: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`
		),
	}));

	return (
		<main className="container mx-auto py-6">
			<ProductsFilterUsingParams />

			<ProductsList products={products} />

			<ProductPagination totalPages={pages} currentPage={page} />
		</main>
	);
}

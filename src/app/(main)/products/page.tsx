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

	const { data, pages, page, total } = await getProductsSSR(query);

	// reSetting products image by currecting URL
	const products = data.map((prod: Product) => ({
		...prod,
		images: prod.images.map(
			(img: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`
		),
	}));

	const brandsList = data.map((p: Product) => p.brand);

	return (
		<main className="container px-5">
			<div className="flex flex-col md:flex-row justify-center items-start gap-5 relative">
				<section className="w-full md:flex-1 md:h-100 mt-10">
					<div className="bg-white p-5 rounded-md shadow w-full h-115 flex flex-col justify-items-start items-center">
						<ProductsFilterUsingParams />
					</div>
				</section>
				<section className="flex-3 flex flex-col justify-center items-center gap-5">
					<ProductsList totalProducts={total} products={products} />
					<ProductPagination totalPages={pages} currentPage={page} />
				</section>
			</div>
		</main>
	);
}

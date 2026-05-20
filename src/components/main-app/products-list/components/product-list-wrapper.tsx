import ProductPagination from "@/components/shared/product-pagination";
import { getProductsSSR } from "@/services/get-products-by-params";
import { Product } from "@/types/product-data-type";
import ProductsList from "./products-list";

// components/main-app/products-list/products-list-wrapper.tsx
export default async function ProductsListWrapper({
	query,
}: {
	query: Record<string, string>;
}) {
	// to test skeleton loading
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const { data, pages, page, total } = await getProductsSSR(query);

	const products = data.map((prod: Product) => ({
		...prod,
		images: prod.images.map(
			(img: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`
		),
	}));

	return (
		<>
			<ProductsList
				products={products}
				totalProducts={total}
				currentPage={page}
			/>
			<div className="w-full bg-white py-2 rounded-sm">
				<ProductPagination totalPages={pages} currentPage={page} />
			</div>
		</>
	);
}

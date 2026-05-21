import { ProductSliderContainer } from "@/components/shared/product-slider-container";
import { getProductsSSR } from "@/services/get-products-by-params";
import { Product } from "@/types/product-data-type";

// components/main-app/products-list/products-list-wrapper.tsx
export default async function ProductsSliderWrapper({
	query,
}: {
	query: Record<string, string>;
}) {
	// to test skeleton loading

	const { data, page } = await getProductsSSR(query);

	const products = data.map((prod: Product) => ({
		...prod,
		images: prod.images.map(
			(img: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`
		),
	}));
	const mostPopularProducts = products.filter(
		(p: Product) => p.popularity > 40
	);

	return <ProductSliderContainer product={mostPopularProducts} key={page} />;
}

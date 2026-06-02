import ProductActions from "@/components/main-app/single-product/components/product-actions";
import ProductGallery from "@/components/main-app/single-product/components/product-gallery";
import ProductInfo from "@/components/main-app/single-product/components/product-info";
import ProductSpecs from "@/components/main-app/single-product/components/product-specs";
import RelatedProducts from "@/components/main-app/single-product/components/related-products";
import { getProduct } from "@/services/get-single-product";

interface ProductPageProps {
	params: Promise<{ id: string }>;
}
export default async function ProductPage(props: ProductPageProps) {
	const { id } = await props.params;

	const data = await getProduct(id);

	const product = {
		...data,
		images: data.images.map(
			(img: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`
		),
	};

	return (
		<section className="bg-white -mt-4 -mb-10 w-screen flex flex-col justify-start items-center">
			<div className="container text-[10px] text-white min-h-full py-5 px-6 md:px-14 flex flex-col justify-start items-center">
				<div className="min-w-full grid md:grid-cols-[3fr_2fr] gap-2">
					<div className="w-full rounded-sm overflow-hidden">
						<ProductGallery images={product.images} />
					</div>
					<div className="bg-(--color-gold-dark)/5 py-5 px-10 flex flex-col border border-(--color-gold)/20 rounded-sm overflow-hidden">
						<ProductInfo product={product} />

						<ProductActions product={product} />
					</div>
				</div>

				<ProductSpecs product={product} />
				<RelatedProducts brand={product.brand} />
			</div>
		</section>
	);
}

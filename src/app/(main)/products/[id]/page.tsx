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
		<section className="rovix-bg-darkest -mt-4 -mb-10 w-screen flex flex-col justify-start items-center">
			<div className="container rovix-bg-darkest text-[10px] text-white min-h-full py-10 px-6 md:px-14 flex flex-col justify-start items-center">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="w-full border border-(--color-gold)/20 rounded-sm overflow-hidden">
						<ProductGallery images={product.images} />
					</div>
					<div className="flex flex-col gap-4">
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

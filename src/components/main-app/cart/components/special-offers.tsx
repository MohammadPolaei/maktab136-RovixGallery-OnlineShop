import { ProductSliderContainer } from "@/components/shared/product-slider-container";
import { Product } from "@/types/product-data-type";

export default function SpecialOffers({
	products,
	page,
}: {
	products: Product[];
	page: number;
}) {
	return (
		<div className="w-full md:w-full flex flex-col items-center">
			<ProductSliderContainer page={page} product={products} discounted />
		</div>
	);
}

import SectionTitle from "@/components/base/section-title";
import { ProductSliderContainer } from "@/components/shared/product-slider-container";
import { Product } from "@/types/product-data-type";

export default function SpecialOffers({
	specialProducts,
}: {
	specialProducts: Product[];
}) {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<SectionTitle title={`تخفیف های داغ`} />
			<ProductSliderContainer product={specialProducts} />
		</div>
	);
}

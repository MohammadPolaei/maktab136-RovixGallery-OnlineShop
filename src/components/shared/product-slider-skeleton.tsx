import ProductCardMinimalSkeleton from "./product-card-minimal-skeleton";

export default function ProductSliderSkeleton() {
	return (
		<section className="w-70 sm:w-150 md:min-w-full overflow-hidden">
			<div className="flex gap-3 py-5 animate-pulse overflow-hidden">
				{Array.from({ length: 8 }).map((_, i) => (
					<ProductCardMinimalSkeleton key={i} />
				))}
			</div>
		</section>
	);
}

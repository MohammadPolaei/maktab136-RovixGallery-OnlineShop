import ProductCardSkeleton from "./product-card-skeleton";

export default function ProductsGridSkeleton() {
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
			{Array.from({ length: 8 }).map((_, i) => (
				<ProductCardSkeleton key={i} />
			))}
		</div>
	);
}

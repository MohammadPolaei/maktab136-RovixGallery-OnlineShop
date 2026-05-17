import ProductCard from "@/components/shared/product-card";
import { Product } from "@/types/product-data-type";

export default function ProductsList({
	products,
	totalProducts,
}: {
	products: any[];
	totalProducts: number;
}) {
	return (
		<div className="w-full">
			<div className="text-black/50 text-[10px] w-full flex flex-col md:flex-row justify-between items-center gap-1 pb-1 pt-2 px-6">
				<div>{`نمایش 12 از ${totalProducts} محصول`}</div>
			</div>
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-row-2 gap-2 rounded-sm shadow shadow-black/5">
				{products.length > 0 ? (
					products.map((p: Product) => (
						<ProductCard key={p._id} product={p} cardUsageType="product-list" />
					))
				) : (
					<div className="w-full md:w-260 h-100 text-center bg-(--color-accent-green)/10 flex flex-col items-center justify-center rounded-sm">
						محصولی برای نمایش وجود ندارد
					</div>
				)}
			</div>
		</div>
	);
}

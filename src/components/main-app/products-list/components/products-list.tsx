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
			<div className="text-black/50 text-[12px] w-full flex flex-col md:flex-row justify-between items-center gap-1 py-2">
				<div>{`نمایش 12 از ${totalProducts} محصول`}</div>
				<div>مرتب سازی</div>
			</div>
			{products.length > 0 ? (
				<div className="w-full h-110 overflow-y-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 grid-row-2 gap-2 px-5 py-1 rounded-md shadow-2xl shadow-black/5">
					{products.map((p: Product) => (
						<ProductCard key={p._id} product={p} cardUsageType="product-list" />
					))}
				</div>
			) : (
				<div className="w-200 h-110 text-center bg-(--color-accent-green)/10 flex flex-col items-center justify-center rounded-2xl">
					محصولی برای نمایش وجود ندارد
				</div>
			)}
		</div>
	);
}

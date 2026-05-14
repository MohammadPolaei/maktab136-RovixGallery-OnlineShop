import ProductCard from "@/components/shared/product-card";
import { Product } from "@/types/product-data-type";

export default function ProductsList({
	products,
	totalProducts,
}: {
	products: any;
	totalProducts: number;
}) {
	return (
		<div className="w-full">
			<div className="text-black/50 text-[12px] w-full flex flex-col md:flex-row justify-between items-center gap-1 py-5">
				<div>{`نمایش 12 از ${totalProducts} محصول`}</div>
				<div>مرتب سازی</div>
			</div>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
				{products.map((p: Product) => (
					<ProductCard key={p._id} product={p} cardUsageType="product-list" />
				))}
			</div>
		</div>
	);
}

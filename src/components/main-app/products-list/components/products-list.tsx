import ProductCard from "@/components/shared/product-card";
import { Product } from "@/types/product-data-type";

export default function ProductsList({ products }: { products: any }) {
	return (
		<div>
			{products.map((p: Product) => (
				<ProductCard key={p._id} product={p} />
			))}
		</div>
	);
}

import { Product } from "@/types/product-data-type";

export default function ProductCard({ product }: { product: Product }) {
	return (
		<div className="p-3 border rounded-lg">
			<img src={product.images[0]} alt={product.name} />
			<h3>{product.name}</h3>
			<p>{product.price} تومان</p>
		</div>
	);
}

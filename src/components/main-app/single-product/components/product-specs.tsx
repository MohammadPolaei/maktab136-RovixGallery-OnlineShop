import { Product } from "@/types/product-data-type";

interface SpecsProps {
	product: Product;
}

export default function ProductSpecs({ product }: SpecsProps) {
	return (
		<div className="mt-12 w-full">
			<div className="border-b border-(--color-gold)/20 pb-2 mb-4">
				<h2 className="text-[12px] rovix-text-gold font-semibold">
					توضیحات محصول
				</h2>
			</div>
			<p className="text-[10px] leading-5 text-gray-300">
				{product.description}
			</p>
		</div>
	);
}

import { Product } from "@/types/product-data-type";
import DOMPurify from "isomorphic-dompurify";
interface SpecsProps {
	product: Product;
}

export default function ProductSpecs({ product }: SpecsProps) {
	return (
		<div className="mt-12 w-full">
			<div className="border-b border-black/20 pb-2 mb-4">
				<h2 className="text-[12px] text-black font-semibold">توضیحات محصول</h2>
			</div>

			<div
				className="text-[10px] leading-5 text-gray-800"
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(product.description),
				}}
			/>
		</div>
	);
}

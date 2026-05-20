import { Product } from "@/types/product-data-type";
import { faNumber } from "@/utils/convert-number-into-persian";

interface InfoProps {
	product: Product;
}

export default function ProductInfo({ product }: InfoProps) {
	return (
		<div>
			<h1 className="text-[14px] font-bold rovix-text-gold mb-2">
				ساعت مچی {product.brand} {product.name}
			</h1>
			<ul className="text-[10px] space-y-1 text-gray-300">
				<li>برند: {product.brand}</li>
				<li>مدل: {product._id}</li>
				<li>جنسیت: {product.gender}</li>
				<li>رنگ صفحه: {product.dialColor}</li>
				<li>کشور سازنده: {product.brandCountry}</li>
			</ul>
			<p className="mt-4 text-[10px] text-gray-400 leading-relaxed">
				{product.description}
			</p>
			<p className="text-[12px] mt-4 rovix-text-gold font-bold">
				{faNumber(product.price)} ریال
			</p>
		</div>
	);
}

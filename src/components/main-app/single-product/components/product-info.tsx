import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import ShowColorOnCard from "@/components/shared/show-color-on-card";
import { Product } from "@/types/product-data-type";
import { faNumber } from "@/utils/convert-number-into-persian";

interface InfoProps {
	product: Product;
}

export default function ProductInfo({ product }: InfoProps) {
	return (
		<div>
			<h1 className="text-[14px] font-semibold text-black/80 mb-2 flex flex-row justify-start items-center gap-2">
				<FavoriteOutlined color="#0008" size={20} />
				ساعت مچی {product.name}
			</h1>
			<ul className="text-[14px] pt-5 text-gray-900 flex flex-col justify-start gap-2 border-b border-b-(--color-gold)/20 pb-10">
				<li className="grid grid-cols-2">
					برند: <span className="font-bold">{product.brand}</span>
				</li>
				<li className="grid grid-cols-2">
					جنس بند: <span>{product.material}</span>
				</li>
				<li className="grid grid-cols-2">
					رنگ بند:{" "}
					<span className="flex items-center gap-2">
						{product.color}
						<div>{ShowColorOnCard(product.color)}</div>
					</span>
				</li>
				<li className="grid grid-cols-2">
					جنسیت: <span>{product.gender}</span>
				</li>
				<li className="grid grid-cols-2">
					رنگ صفحه:{" "}
					<span className="flex items-center gap-2">
						{product.dialColor}
						<div>{ShowColorOnCard(product.dialColor)}</div>
					</span>
				</li>
				<li className="grid grid-cols-2">
					کشور سازنده: <span>{product.brandCountry}</span>
				</li>
			</ul>
			<div className="mt-4 text-[14px] text-gray-900 leading-relaxed flex flex-col lg:flex-row justify-between items-center gap-5">
				<div className="flex justify-center items-center gap-10">
					{"وضعیت :"}
					{product.stock > 1 ? (
						<div className="flex items-center gap-2">
							<div className="bg-green-500 w-3 h-3 rounded-full" />
							{`موجود`}
						</div>
					) : (
						<div className="flex items-center gap-2">
							<div className="bg-red-500 w-3 h-3 rounded-full" />
							{`ناموجود`}
						</div>
					)}
				</div>
				<div>
					<p className="text-[20px] text-(--color-gold-dark) font-bold">
						{faNumber(product.price)} ریال
					</p>
				</div>
			</div>
		</div>
	);
}

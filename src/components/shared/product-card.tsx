import CartIconButton from "@/assets/SVG/cart-icon-button";
import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import { Product } from "@/types/product-data-type";
import { faNumber } from "@/utils/convert-number-into-persian";
import Image from "next/image";
import ShowColorOnCard from "./show-color-on-card";

type ProductCardProps = {
	product: Product;
	cardUsageType: "product-list" | "cart" | "special-offers";
};

export default function ProductCard({
	product,
	cardUsageType,
}: ProductCardProps) {
	return (
		<div className="w-full h-85 px-5 pt-8 pb-20 bg-white rounded-2xl hover:rounded-md shadow hover:shadow-2xl text-[8px] border-2 border-white/0 hover:border-gray-200 text-black/80 cursor-pointer flex flex-col justify-between items-center gap-5 relative transition-all ease-in-out duration-500">
			<div className="text-black/50 absolute top-2 left-2">
				<FavoriteOutlined size={20} />
			</div>
			<div className="w-full">
				<Image
					src={product.images[0]}
					alt={product.name}
					width={150}
					height={200}
					className="rounded-md"
				/>
			</div>
			<div className="w-full pt-5 pb-10 flex flex-col justify-between items-center gap-5 absolute bottom-5 bg-white">
				<div className="w-full flex flex-row justify-between items-center px-5">
					<div>
						{`جنس بند : `}
						{product.material}
					</div>
					<div className="flex justify-center items-center gap-1 font-semibold">
						{product.gender}
					</div>
				</div>
				<div className="w-full flex flex-row justify-between items-center px-5">
					<div>{ShowColorOnCard(product.color)}</div>
					<div className="flex justify-center items-center gap-1">
						{faNumber(product.popularity)}
						<FavoriteOutlined size={12} />
					</div>
				</div>
				<span className="font-semibold text-center">{product.name}</span>
				<span>{faNumber(product.price).toLocaleString()} ریال</span>
				<button className="absolute -bottom-1 bg-(--color-gold) hover:bg-(--color-gold-dark) text-[10px] mx-5 py-2 px-3 flex justify-center items-center gap-2 rounded-md cursor-pointer transition-all ease-in-out duration-500">
					<CartIconButton />
					<span className="text-[8px]">افزودن به سبد خرید</span>
				</button>
			</div>
		</div>
	);
}

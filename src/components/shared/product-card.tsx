import CartIconButton from "@/assets/SVG/cart-icon-button";
import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import { Product } from "@/types/product-data-type";
import Image from "next/image";

type ProductCardProps = {
	product: Product;
	cardUsageType: "product-list" | "cart";
};

export default function ProductCard({
	product,
	cardUsageType,
}: ProductCardProps) {
	return (
		<div className="w-full h-100 px-5 pt-8 pb-20 bg-white rounded-2xl hover:rounded-md shadow hover:shadow-2xl text-[12px] border-2 border-white/0 hover:border-gray-200 text-black/80 cursor-pointer flex flex-col justify-between items-center gap-5 relative transition-all ease-in-out duration-500">
			<div className="text-black/50 absolute top-2 left-2">
				<FavoriteOutlined />
			</div>
			<div className="h-50">
				<Image
					src={product.images[0]}
					alt={product.name}
					width={250}
					height={250}
					className="rounded-md"
				/>
			</div>
			<div className="w-full pt-5 flex flex-col justify-between items-center gap-5 absolute bottom-15 bg-white">
				<span className="font-semibold text-center">{product.name}</span>
				<span>{product.price} ریال</span>
				<button className="absolute -bottom-12 bg-(--color-gold-dark) hover:bg-(--color-gold) text-[10px] mx-5 py-2 px-3 flex justify-center items-center gap-2 rounded-md cursor-pointer transition-all ease-in-out duration-500">
					<CartIconButton />
					<span>افزودن به سبد خرید +</span>
				</button>
			</div>
		</div>
	);
}

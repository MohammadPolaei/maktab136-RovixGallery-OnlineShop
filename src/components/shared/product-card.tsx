import { EyeIcon } from "@/assets/SVG/auth/show-hide-password-icon";
import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import { StarFilledIcon } from "@/assets/SVG/product-card/rating-icon";
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
		<div className="w-full px-2 pt-8 pb-1 bg-white rounded-md shadow text-[10px] border-2 border-white/0 text-black/80 cursor-pointer flex flex-col justify-between items-center gap-5 relative transition-all ease-in-out duration-500">
			<div className="w-full h-full bg-(--color-accent-green)/20 backdrop-blur-[15px] absolute top-0 rounded-md border flex flex-col justify-center items-center gap-1 opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
				<EyeIcon />
				<span>{`مشاهده محصول`}</span>
				<span>{`${product.name}`}</span>
			</div>
			<div className="text-black/50 absolute top-2 left-2">
				<FavoriteOutlined size={20} />
			</div>
			<div className="w-full h-55">
				<Image
					src={product.images[0]}
					alt={product.name}
					width={300}
					height={200}
					className="rounded-md"
				/>
			</div>
			<div className="w-full flex flex-row justify-between items-center ">
				<div>
					{`جنس بند : `}
					{product.material}
				</div>
				<div className="flex justify-center items-center gap-1 font-semibold">
					{product.gender}
				</div>
			</div>
			<div className="w-full flex flex-row justify-between items-center ">
				<div>{ShowColorOnCard(product.color)}</div>
				<div className="flex justify-center items-center gap-1">
					{faNumber(product.popularity)}
					<FavoriteOutlined size={12} />
				</div>
			</div>
			<span className="w-full font-semibold text-left">{product.name}</span>
			<div className="w-full flex justify-between items-center">
				<span>{faNumber(product.price).toLocaleString()} ریال</span>
				<span className="flex justify-center items-center">
					{faNumber(product.popularity / 10)}
					<StarFilledIcon />
				</span>
			</div>
			{/* <button className="absolute -bottom-1 bg-(--color-gold) hover:bg-(--color-gold-dark) text-[10px] mx-2 py-2  flex justify-center items-center gap-2 rounded-md cursor-pointer transition-all ease-in-out duration-500">
					<CartIconButton />
					<span className="text-[8px]">افزودن به سبد خرید</span>
					</button> */}
		</div>
	);
}

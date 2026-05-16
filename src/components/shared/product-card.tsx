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
		<div className="w-full px-3 pb-3 pt-10 bg-white rounded-md shadow text-[10px] text-black/80 cursor-pointer flex flex-col justify-between items-center relative">
			<div className="w-full h-full bg-white/90 backdrop-blur-[3px] absolute top-0 rounded-md flex flex-col justify-center items-center gap-1 opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
				<EyeIcon />
				<span>{`مشاهده محصول`}</span>
				<span>{`${product.name}`}</span>
			</div>
			<div className="text-black/50 absolute top-2 left-2">
				<FavoriteOutlined size={18} />
			</div>
			<div className="w-4/5 mb-5">
				<Image
					src={product.images[0]}
					alt={product.name}
					width={300}
					height={200}
					className="rounded-md"
				/>
			</div>
			<div className="w-full">
				<div className="w-full flex flex-col justify-between items-center gap-5 border-b border-black/10 pb-3">
					<div className="w-full flex flex-row justify-between items-start text-[8px] lg:text-[10px]">
						<div>
							{`جنس بند : `}
							{product.material}
						</div>
						<div className="flex gap-1">
							<span>رنگ بند</span>
							{ShowColorOnCard(product.color)}
						</div>
						<div className="flex gap-1">
							<span>رنگ صفحه</span>
							{ShowColorOnCard(product.dialColor)}
						</div>
					</div>
					<div className="w-full flex flex-row justify-between items-start ">
						<div className="flex justify-center items-center gap-1 font-semibold">
							{product.gender}
						</div>
						<div className="flex justify-center items-center gap-1 font-semibold">
							{product.brand}
						</div>
						<div className="flex justify-center items-center gap-1">
							{faNumber(product.popularity)}
							<FavoriteOutlined size={12} />
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col justify-between items-end gap-3 pt-5">
					<span className="w-full font-semibold text-left">{product.name}</span>
					<span className="w-full flex justify-end items-start gap-1">
						{faNumber(product.popularity / 10)}
						<StarFilledIcon />
					</span>
					<div className="w-full text-left">
						<span>
							{product.stock < 1 ? (
								<span className="text-red-800">ناموجود</span>
							) : (
								<span className="font-bold">
									{faNumber(product.price).toLocaleString()}{" "}
									<span className="text-black/50">ریال</span>
								</span>
							)}
						</span>
					</div>
				</div>
			</div>
			{/* <button className="absolute -bottom-1 bg-(--color-gold) hover:bg-(--color-gold-dark) text-[10px] mx-2 py-2  flex justify-center items-center gap-2 rounded-md cursor-pointer transition-all ease-in-out duration-500">
					<CartIconButton />
					<span className="text-[8px]">افزودن به سبد خرید</span>
					</button> */}
		</div>
	);
}

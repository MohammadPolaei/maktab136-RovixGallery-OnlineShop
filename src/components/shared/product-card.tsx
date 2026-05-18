import { EyeIcon } from "@/assets/SVG/auth/show-hide-password-icon";
import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import { StarFilledIcon } from "@/assets/SVG/product-card/rating-icon";
import {
	WatchDialIcon,
	WatchStrapIcon,
} from "@/assets/SVG/product-card/watch-icon";
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
		<div className="w-full px-3 pb-3 pt-10 bg-white rounded-sm shadow shadow-black/5 text-[10px] text-black/80 cursor-pointer flex flex-col justify-between items-center relative">
			<div className="w-full h-full bg-white/90 backdrop-blur-[3px] absolute top-0 rounded-sm flex flex-col justify-center items-center gap-1 opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
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
					className="rounded-sm"
				/>
			</div>
			<div className="w-full">
				<div className="w-full flex flex-row justify-between items-center border-b border-black/10 pb-3">
					<div className="w-full flex flex-col justify-between items-start gap-3 text-[8px] lg:text-[10px]">
						<div className="flex justify-center items-center gap-1 font-normal text-black/60">
							<WatchDialIcon />
							{ShowColorOnCard(product.dialColor)}
							{product.dialColor}
						</div>
						<div className="flex justify-center items-center gap-1 font-normal text-black/60">
							<WatchStrapIcon />
							{product.material}
							{ShowColorOnCard(product.color)}
							{product.color}
						</div>
					</div>
					<div className="w-full flex flex-col justify-between items-end gap-5">
						<div className="flex justify-center items-center gap-1 font-normal text-black/60">
							{product.gender === "مردانه" ? (
								<span className="w-10 h-5 flex justify-center items-center rounded-sm bg-cyan-800/10">
									{product.gender}
								</span>
							) : product.gender === "زنانه" ? (
								<span className="w-10 h-5 flex justify-center items-center rounded-sm bg-pink-800/10">
									{product.gender}
								</span>
							) : (
								<span>{product.gender}</span>
							)}
						</div>
						<div className="flex justify-center items-center gap-1 font-semibold text-[14px] text-black/80">
							{product.brand}
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col justify-between items-end gap-5 pt-5">
					<span className="w-full font-normal text-[12px] text-left text-black/60">
						{product.name}
					</span>
					<div className="w-full flex">
						<span className="w-full flex justify-start items-start gap-1">
							{faNumber(product.popularity / 10)}
							<StarFilledIcon />
						</span>

						{product.stock < 1 ? (
							<span className="text-red-800 text-[14px]">ناموجود</span>
						) : (
							<span className="font-bold text-[14px] text-left flex justify-between items-center gap-2">
								{faNumber(product.price).toLocaleString()}{" "}
								<span className="text-black/40 text-[10px]">ریال</span>
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

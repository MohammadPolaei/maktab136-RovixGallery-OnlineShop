"use client";

import { EyeIcon } from "@/assets/SVG/auth/show-hide-password-icon";
import CartIconButton from "@/assets/SVG/cart-icon-button";
import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import { StarFilledIcon } from "@/assets/SVG/product-card/rating-icon";
import {
	WatchDialIcon,
	WatchStrapIcon,
} from "@/assets/SVG/product-card/watch-icon";
import ShowColorOnCard from "@/components/shared/show-color-on-card";
import { Product } from "@/types/product-data-type";
import { faNumber } from "@/utils/convert-number-into-persian";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const cardItemVariants: Variants = {
	hidden: { opacity: 0, y: 30, scale: 0.96 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 110,
			damping: 16,
		},
	},
};

const addToCartVariants: Variants = {
	hidden: { opacity: 0, y: 20, scale: 0.96 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.1,
			delay: 0.1,
			ease: "easeOut",
		},
	},
};

export default function ProductCard({ product }: { product: Product }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.article
			variants={cardItemVariants}
			whileHover={{ y: -8 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className="
        group w-full h-full
        bg-white
        rounded-sm
        border border-neutral-100
        px-4 pt-9 pb-5
        shadow-[0_4px_18px_rgba(0,0,0,0.02)]
        hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)]
        transition-all duration-500
        flex flex-col justify-between
        relative overflow-hidden
      "
		>
			{/* Hover overlay */}
			<div
				className="
        absolute inset-0
        bg-white/40
        backdrop-blur-xs
        flex flex-col justify-center items-center gap-2
        opacity-0 group-hover:opacity-100
        transition-all duration-500
        z-30
				cursor-pointer
      "
			>
				<div
					className="
          bg-black/50 text-white
          p-3
          rounded-full
          translate-y-4
          group-hover:translate-y-0
          transition-all duration-500
          shadow-xl
        "
				>
					<EyeIcon />
				</div>

				<span className="text-[11px] font-bold text-black">مشاهده جزئیات</span>

				<motion.button
					variants={addToCartVariants}
					initial="hidden"
					animate={isHovered ? "visible" : "hidden"}
					className="w-2/3 py-3 mx-auto bg-black/50 hover:bg-(--color-gold) text-[12px] text-white hover:text-black cursor-pointer rounded-sm flex justify-center items-center gap-1 transition-all duration-500 ease-in-out absolute bottom-10"
				>
					<CartIconButton />
					<span>افزودن به سبد خرید</span>
				</motion.button>
			</div>

			{/* Favorite */}
			<div
				className="
        absolute top-4 left-4
        text-neutral-300
        hover:text-red-500
        transition-colors
        z-100
				cursor-pointer
      "
			>
				<FavoriteOutlined size={20} />
			</div>

			{/* Image */}
			<div className="relative w-full aspect-square flex items-center justify-center mb-6 overflow-hidden">
				<div
					className="
          absolute inset-0
          bg-neutral-50
          scale-75 blur-3xl
          opacity-60
          group-hover:scale-100
          transition-transform duration-700"
				/>

				<Image
					src={product.images[0]}
					alt={product.name}
					width={280}
					height={280}
					className="
            relative z-10
            object-contain
            p-2
            group-hover:scale-110
            transition-transform duration-700
          "
				/>
			</div>

			<div className="w-full flex flex-col relative z-10">
				{/* Specs */}
				<div
					className="
          flex justify-between items-start
          border-b border-neutral-100
          pb-4 mb-3
        "
				>
					<div className="flex flex-col gap-2 text-neutral-400">
						<div className="flex items-center gap-1.5 text-[10px]">
							<WatchDialIcon />
							<span>{product.dialColor}</span>
							{ShowColorOnCard(product.dialColor)}
						</div>

						<div className="flex items-center gap-1.5 text-[10px]">
							<WatchStrapIcon />
							<span>{product.material}</span>
							{ShowColorOnCard(product.color)}
						</div>
					</div>

					<div className="flex flex-col items-end gap-3">
						<span
							className={`
              px-2 py-0.5
              text-[9px]
              font-bold
              rounded-sm
              ${
								product.gender === "مردانه"
									? "bg-blue-50 text-blue-600"
									: "bg-pink-50 text-pink-600"
							}
            `}
						>
							{product.gender}
						</span>

						<span className="text-[15px] font-black text-neutral-900 tracking-tight">
							{product.brand}
						</span>
					</div>
				</div>

				{/* Product name */}
				<h3 className="text-[11px] text-neutral-400 text-left line-clamp-1 mb-4 font-light">
					{product.name}
				</h3>

				{/* Bottom row */}
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-1 text-amber-500 bg-amber-50/60 px-2 py-0.5 rounded-sm">
						<StarFilledIcon />
						<span className="text-[11px] font-bold">
							{faNumber(product.popularity / 10)}
						</span>
					</div>

					{product.stock < 1 ? (
						<span className="text-red-500 font-bold text-[13px]">ناموجود</span>
					) : (
						<div className="flex items-baseline gap-1.5">
							<span className="text-[17px] font-black text-neutral-900">
								{faNumber(product.price).toLocaleString()}
							</span>
							<span className="text-[10px] text-neutral-400 font-medium">
								ریال
							</span>
						</div>
					)}
				</div>
			</div>
		</motion.article>
	);
}

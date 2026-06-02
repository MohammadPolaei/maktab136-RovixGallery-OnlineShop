"use client";

import { EyeIcon } from "@/assets/SVG/auth/show-hide-password-icon";
import CartIconButton from "@/assets/SVG/cart-icon-button";
import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import { StarFilledIcon } from "@/assets/SVG/product-card/rating-icon";
import {
	WatchDialIcon,
	WatchStrapIcon,
} from "@/assets/SVG/product-card/watch-icon";
import AddToCartSingleProduct from "@/components/shared/add-to-cart-single-product";
import ShowColorOnCard from "@/components/shared/show-color-on-card";
import { Product } from "@/types/product-data-type";
import { faNumber } from "@/utils/convert-number-into-persian";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useCartStore } from "../../cart/hooks/use-cart-CRUD";

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

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.001,
			delayChildren: 0.001,
			duration: 1,
		},
	},
};

const childVariants: Variants = {
	hidden: { opacity: 0, y: 15, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "tween",
			stiffness: 100,
			damping: 20,
		},
	},
};

export default function ProductCard({ product }: { product: Product }) {
	const [isHovered, setIsHovered] = useState(false);
	const notInStock = product.stock < 1;
	const { addItem } = useCartStore();

	const [quantity, setQuantity] = useState(1);

	const { cart } = useCartStore();

	let thisProductInCart = cart?.data.items.find(
		(prod) => prod.product._id == product._id
	);
	useEffect(() => {
		thisProductInCart = cart?.data.items.find(
			(prod) => prod.product._id == product._id
		);
	}, [cart]);

	const handleAddToCart = async () => {
		if (notInStock) return;
		const diff =
			quantity - (thisProductInCart ? thisProductInCart.quantity : 0);

		if (quantity == 1 && !thisProductInCart) {
			await addItem({ productId: product._id, quantity: quantity });
			return;
		}
		if (
			thisProductInCart
				? thisProductInCart?.quantity > 5 || quantity > 5
				: false
		) {
			toast.error("بیشتر از 5 عدد مجاز نیست");
			return;
		}

		if (thisProductInCart) {
			if (diff <= 0) {
				toast.error("حداقل 1 عدد بیشتر به سبد اضافه شود");
				return;
			}

			if (diff > 5) {
				toast.error("بیشتر از 5 عدد مجاز نیست");
				return;
			}

			await addItem({
				productId: product._id,
				quantity: diff,
			});
		} else {
			if (quantity <= 0) {
				toast.error("حداقل 1 عدد بیشتر به سبد اضافه شود");
				return;
			}

			if (quantity > 5) {
				toast.error("بیشتر از 5 عدد مجاز نیست");
				return;
			}

			await addItem({
				productId: product._id,
				quantity: quantity,
			});
		}
	};

	return (
		<motion.article
			variants={cardItemVariants}
			whileHover={{ y: -8 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className={`group w-full h-full
				${
					notInStock
						? "bg-neutral-100 shadow-[0_4px_18px_rgba(0,0,0,0.02)]"
						: "bg-white"
				}

        rounded-sm
        border border-neutral-100
        px-4 pt-9 pb-5
        
        hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)]
        transition-all duration-500
        flex flex-col justify-between
        relative overflow-hidden`}
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
				<Link href={`/products/${product._id}`} title={product.name}>
					<div
						className="w-full flex flex-col justify-center items-center gap-2 p-5  translate-y-4
          group-hover:translate-y-0
          transition-all duration-500 hover:scale-130 origin-center active:scale-150 active:opacity-0"
					>
						<div
							className="
          bg-black/80 text-white
          p-3
          rounded-full
          shadow-xl
					"
						>
							<EyeIcon />
						</div>

						<span className="text-[10px] font-bold text-black">
							مشاهده جزئیات
						</span>
					</div>
				</Link>

				{notInStock ? (
					<motion.button
						variants={addToCartVariants}
						initial="hidden"
						animate={isHovered ? "visible" : "hidden"}
						className="w-2/3 py-3 mx-auto bg-black/20 hover:bg-(--color-gold)/20 text-[10px] text-black font-bold hover:text-black cursor-pointer rounded-sm flex justify-center items-center gap-1 transition-all duration-500 ease-in-out absolute bottom-10"
					>
						<span>به من اطلاع بده !</span>
					</motion.button>
				) : (
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isHovered ? "visible" : "hidden"}
						className="absolute inset-0 flex flex-col items-center pointer-events-none"
					>
						<motion.div
							variants={childVariants}
							className="w-full flex flex-col justify-center items-center absolute bottom-25 bg-radial from-white via-transparent to-transparent z-40 pointer-events-auto"
						>
							<AddToCartSingleProduct
								product={product}
								setSingleProdQuantityValue={setQuantity}
								usageType="product-card"
							/>
						</motion.div>

						<motion.button
							onClick={handleAddToCart}
							variants={childVariants}
							className="w-2/3 py-3 bg-black/80 hover:bg-(--color-gold) text-[10px] text-white font-bold hover:text-black cursor-pointer rounded-sm flex justify-center items-center gap-1 transition-all duration-500 ease-in-out absolute bottom-10 pointer-events-auto"
						>
							<CartIconButton />
							<span>افزودن به سبد خرید</span>
						</motion.button>
					</motion.div>
				)}
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
					unoptimized
					src={product.images[0]}
					alt={product.name}
					width={280}
					height={280}
					className={`relative z-10
            object-contain
            p-2
            group-hover:scale-110
            transition-transform duration-700
						${notInStock ? "saturate-10 opacity-30" : ""}
						`}
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

					{notInStock ? (
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

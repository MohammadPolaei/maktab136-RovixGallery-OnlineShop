"use client";

import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import { faNumber } from "@/utils/convert-number-into-persian";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 60, scale: 0.5 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.1, ease: [0.22, 1, 0.36, 1] },
	},
};

interface ProductCardMinimalProps {
	name: string;
	brand: string;
	images: string[];
	price: number;
	rating?: number;
	isFavorite?: boolean;
	discounted?: boolean;
}

export function ProductCardMinimal({
	name,
	brand,
	images,
	price,
	rating = 5,
	isFavorite = false,
	discounted = false,
}: ProductCardMinimalProps) {
	const image = images?.[0] ?? "/placeholder.png";
	const [shineKey, setShineKey] = useState(0);

	// discount

	const discountNumber = 15;

	return (
		<>
			<motion.article
				variants={cardVariants}
				whileHover={{ y: -12 }}
				onHoverStart={() => setShineKey((prev) => prev + 1)}
				className="group relative cursor-pointer flex max-w-70 flex-col overflow-hidden rounded-sm hover:rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-100 hover:ring-(--color-accent-green) hover:bg-(--color-accent-green) transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
			>
				{/* Favorite Button */}
				<button className="absolute left-4 top-4 z-10 rounded-full bg-white/80 p-1.5 text-slate-500 backdrop-blur-md transition-all hover:bg-white hover:text-rose-500">
					<FavoriteOutlined size={15} />
				</button>
				{/* for Discounted cards */}
				<div
					className={`${
						!discounted && "hidden"
					} bg-linear-0 from-(--color-gold) to-(--color-gold-dark) rotate-45 text-[12px} group-hover:text-(--color-accent-green) w-50 h-15 group-hover:scale-130 absolute -top-5 -right-20 z-100 flex justify-center items-end text-white transition-all duration-700 ease-in-out`}
				>
					{`${discountNumber.toLocaleString("fa-IR")}%`}
				</div>

				{/* Product Image Container */}
				<div className="relative aspect-4/5 transition-all ease-in-out duration-800 overflow-hidden rounded-sm group-hover:rounded-md bg-[#F8F9FA] flex items-center justify-center p-6">
					{/* Shine */}
					<div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
						<div
							key={shineKey}
							className="absolute top-0 h-full w-[40%] rotate-12 bg-linear-to-r from-transparent via-white/60 to-transparent blur-md"
							style={{
								transform: "translateX(-150%) rotate(12deg)",
								animation: "shine-sweep 1s ease-out forwards",
							}}
						/>
					</div>

					<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02),transparent)]" />

					<Image
						src={image}
						alt={name}
						width={200}
						height={200}
						className="relative z-10 mix-blend-multiply object-contain transition-transform duration-700 group-hover:scale-120"
					/>
				</div>

				{/* Info Content */}
				<div className="mt-4 flex flex-col items-center px-1 pb-2">
					<span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-600/80 group-hover:text-emerald-300">
						{brand}
					</span>

					<h3 className="mt-1 line-clamp-1 text-[13px] font-medium text-slate-800 transition-colors group-hover:text-white">
						{name}
					</h3>

					<div className="mt-2 flex items-center gap-1.5">
						<div className="flex gap-0.5">
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									className={`h-2.5 w-2.5 ${
										i < Math.floor(rating / 20)
											? "text-amber-400 fill-current"
											: "text-slate-200 fill-current"
									}`}
									viewBox="0 0 20 20"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
						<span className="text-[10px] font-medium text-slate-400 group-hover:text-slate-200">
							({faNumber((rating / 20).toFixed(1))})
						</span>
					</div>

					<div className="mt-4 flex items-baseline gap-1">
						{discounted ? (
							<div className="flex flex-col justify-center items-center">
								<div>
									<span className="text-[14px] md:text-lg font-black text-(--color-accent-green) group-hover:text-white">
										{(price * ((100 - discountNumber) / 100)).toLocaleString(
											"fa-IR"
										)}
									</span>
									<span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-200 uppercase">
										ریال
									</span>
								</div>
								<span className="line-through text-[12px] md:text-sm font-black text-slate-900/30 group-hover:text-white/80">
									{price.toLocaleString("fa-IR")}
								</span>
							</div>
						) : (
							<>
								<span className="text-[14px] md:text-lg font-black text-slate-900 group-hover:text-white">
									{price.toLocaleString("fa-IR")}
								</span>
								<span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-200 uppercase">
									ریال
								</span>
							</>
						)}
					</div>
				</div>
			</motion.article>

			<style jsx>{`
				@keyframes shine-sweep {
					0% {
						transform: translateX(-150%) rotate(12deg);
					}
					100% {
						transform: translateX(250%) rotate(12deg);
					}
				}
			`}</style>
		</>
	);
}

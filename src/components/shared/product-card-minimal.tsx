"use client";

import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

interface ProductCardMinimalProps {
	name: string;
	brand: string;
	images: string[];
	price: number;
	rating?: number;
	isFavorite?: boolean;
}

export function ProductCardMinimal({
	name,
	brand,
	images,
	price,
	rating = 5,
	isFavorite = false,
}: ProductCardMinimalProps) {
	const image = images?.[0] ?? "/placeholder.png";

	return (
		<motion.article
			variants={cardVariants}
			whileHover={{ y: -8 }}
			className="group relative cursor-pointer flex max-w-70 flex-col overflow-hidden rounded-sm bg-white p-3 shadow-sm ring-1 ring-slate-100 hover:ring-(--color-accent-green) hover:bg-(--color-accent-green) transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
		>
			{/* Favorite Button */}
			<button className="absolute left-4 top-4 z-10 rounded-full bg-white/80 p-1.5 text-slate-300 backdrop-blur-md transition-all hover:bg-white hover:text-rose-500">
				<FavoriteOutlined size={15} />
			</button>

			{/* Product Image Container */}
			<div className="relative aspect-4/5 overflow-hidden rounded-sm bg-[#F8F9FA] flex items-center justify-center p-6">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02),transparent)]" />
				<Image
					src={image}
					alt={name}
					width={200}
					height={200}
					className="relative z-10 mix-blend-multiply object-contain transition-transform duration-700 group-hover:scale-110"
				/>
			</div>

			{/* Info Content */}
			<div className="mt-4 flex flex-col items-center px-1 pb-2">
				{/* Brand */}
				<span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-600/80">
					{brand}
				</span>

				{/* Product Name */}
				<h3 className="mt-1 line-clamp-1 text-[13px] font-medium text-slate-800 transition-colors group-hover:text-white/80">
					{name}
				</h3>

				{/* Rating */}
				<div className="mt-2 flex items-center gap-1.5">
					<div className="flex gap-0.5">
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className={`h-2.5 w-2.5 ${
									i < Math.floor(rating)
										? "text-amber-400 fill-current"
										: "text-slate-200 fill-current"
								}`}
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
					</div>
					<span className="text-[10px] font-medium text-slate-400">
						({rating})
					</span>
				</div>

				{/* Price */}
				<div className="mt-4 flex items-baseline gap-1">
					<span className="text-[14px] md:text-lg font-black text-slate-900 group-hover:text-white/80">
						{price.toLocaleString("fa-IR")}
					</span>
					<span className="text-[10px] font-bold text-slate-500 uppercase">
						ریال
					</span>
				</div>
			</div>
		</motion.article>
	);
}

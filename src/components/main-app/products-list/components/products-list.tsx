"use client";
import { Product } from "@/types/product-data-type";
import { motion, Variants } from "framer-motion";
import PriceRangeFilter from "./price-range-filter";
import ProductCard from "./product-card";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function ProductsList({
	products,
	totalProducts,
	currentPage,
}: {
	products: Product[];
	totalProducts: number;
	currentPage: string;
}) {
	return (
		<div className="w-full">
			<div className="text-neutral-400 text-[11px] w-full flex justify-between items-center gap-5 pb-5 pt-8 md:pt-2">
				<div className="bg-white shadow shadow-black/5 px-4 py-1.5 rounded-sm font-medium text-neutral-500">
					{`نمایش ${products.length} از ${totalProducts} محصول`}
				</div>
				<div className="w-fit hidden md:block">
					<PriceRangeFilter />
				</div>
			</div>

			<motion.div
				key={currentPage}
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-start"
			>
				{products.map((p: Product) => (
					<ProductCard key={p._id} product={p} />
				))}
			</motion.div>
		</div>
	);
}

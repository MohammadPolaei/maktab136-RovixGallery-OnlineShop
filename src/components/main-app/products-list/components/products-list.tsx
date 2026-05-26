"use client";
import QueryProvider from "@/providers/query-provider";
import { Product } from "@/types/product-data-type";
import { faNumber } from "@/utils/convert-number-into-persian";
import { motion, Variants } from "framer-motion";
import PriceRangeFilter from "./price-range-filter";
import ProductCard from "./product-card";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
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
			<div className="w-full text-neutral-400 text-[10px] flex flex-col lg:flex-row justify-between items-center gap-3 pb-3 pt-8 md:pt-2">
				<div className="w-full lg:w-40 text-center bg-white shadow shadow-black/5 px-4 py-3 rounded-sm font-medium text-neutral-500">
					{`نمایش ${faNumber(products.length)} از ${faNumber(
						totalProducts
					)} محصول`}
				</div>
				<div className="w-full hidden md:block">
					<PriceRangeFilter />
				</div>
			</div>
			<QueryProvider>
				<motion.div
					key={currentPage}
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-start"
				>
					{products.length > 0 ? (
						products.map((p: Product) => (
							<ProductCard key={p._id} product={p} />
						))
					) : (
						<div className="col-span-full min-h-80 rounded-sm bg-radial via-transparent from-(--color-gold)/40 to-transparent flex flex-col justify-center items-center text-[14px]">
							موردی برای نمایش وجود ندارد
						</div>
					)}
				</motion.div>
			</QueryProvider>
		</div>
	);
}

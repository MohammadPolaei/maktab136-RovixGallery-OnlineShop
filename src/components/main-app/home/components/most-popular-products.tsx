"use client";

import SectionTitle from "@/components/base/section-title";
import { ProductSliderContainer } from "@/components/shared/product-slider-container";
import { Product } from "@/types/product-data-type";
import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
			staggerChildren: 0.2,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MostPopularProducts({
	products,
}: {
	products: Product[];
}) {
	const japanProduct = products.filter(
		(p) => p.brandCountry == "ژاپن" && p.popularity > 50
	);
	const switcherlandProduct = products.filter(
		(p) => p.brandCountry == "سوئیس" && p.popularity > 50
	);

	return (
		<div className="w-full">
			<SectionTitle title={`محبوب ترین ها`} />
			<motion.div
				variants={sectionVariants}
				viewport={{ amount: 0.5 }}
				className="w-full flex flex-col justify-center items-center"
			>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={itemVariants}
					className="w-full flex flex-col justify-center items-center"
				>
					<h2 className="py-3 my-2 bg-(--color-dark-green)/80 text-white/80 w-full rounded-sm text-center">
						{"محبوب ترین ساعتهای سوئیسی"}
					</h2>
					<div className="w-full flex flex-col justify-center items-center">
						<ProductSliderContainer product={switcherlandProduct} />
					</div>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={itemVariants}
					className="w-full flex flex-col justify-center items-center"
				>
					<h2 className="py-3 my-2 bg-(--color-dark-green)/80 text-white/80 w-full rounded-sm text-center">
						{"محبوب ترین ساعتهای ژاپنی"}
					</h2>
					<div className="w-full flex flex-col justify-center items-center">
						<ProductSliderContainer product={japanProduct} />
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}

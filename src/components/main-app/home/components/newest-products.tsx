"use client";
import SectionTitle from "@/components/base/section-title";
import { ProductSliderContainer } from "@/components/shared/product-slider-container";
import { Product } from "@/types/product-data-type";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function NewestProducts({
	product,
	page,
}: {
	product: Product[];
	page: number;
}) {
	const menNewest = product.filter((p) => p.gender == "مردانه");
	const womenNewest = product.filter((p) => p.gender == "زنانه");
	return (
		<div className="w-full">
			<SectionTitle title="جدیدترین ها" />

			<div className="w-full flex flex-col justify-center items-center">
				<section className="w-full">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						variants={itemVariants}
						className="w-full flex flex-col justify-center items-center"
					>
						<h2 className="py-1 my-2 bg-(--color-dark-green)/80 text-white/80 w-full rounded-sm text-center">
							{`جدیدترین ساعت های مردانه`}
						</h2>

						<div className="w-full">
							<ProductSliderContainer key={page} product={menNewest} />
						</div>
					</motion.div>
				</section>
				<section className="w-full">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						variants={itemVariants}
						className="w-full flex flex-col justify-center items-center"
					>
						<h2 className="py-1 my-2 bg-(--color-dark-green)/80 text-white/80 w-full rounded-sm text-center">
							{`جدیدترین ساعت های زنانه`}
						</h2>

						<div className="w-full">
							<ProductSliderContainer key={page + 1} product={womenNewest} />
						</div>
					</motion.div>
				</section>
			</div>
		</div>
	);
}

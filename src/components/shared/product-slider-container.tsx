"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Product } from "@/types/product-data-type";
import { motion } from "framer-motion";
import { ProductCardMinimal } from "./product-card-minimal";

type ProductSliderContainerProps = {
	product: Product[];
};

const containerVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { staggerChildren: 0.08 },
	},
};

export function ProductSliderContainer({
	product,
}: ProductSliderContainerProps) {
	if (!product?.length) return null;

	return (
		<section className="w-70 sm:w-150 md:min-w-full overflow-hidden">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="w-full py-8 overflow-hidden"
			>
				<Swiper
					modules={[FreeMode, Navigation, Autoplay]}
					spaceBetween={8}
					freeMode
					grabCursor
					navigation={true}
					autoplay={{ delay: 4000 }}
					slidesPerView={1.2}
					breakpoints={{
						360: { slidesPerView: 2, spaceBetween: 10 },
						640: { slidesPerView: 3.5, spaceBetween: 10 },
						1024: { slidesPerView: 4.5, spaceBetween: 10 },
						1280: { slidesPerView: 6, spaceBetween: 10 },
					}}
					className="w-full overflow-hidden group/swiper"
				>
					{product.map((item) => (
						<SwiperSlide
							key={item._id}
							className="w-full flex justify-center overflow-hidden!"
						>
							<ProductCardMinimal
								isFavorite={false}
								rating={item.popularity / 10}
								images={item.images}
								name={item.name}
								brand={item.brand}
								price={item.price}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</section>
	);
}

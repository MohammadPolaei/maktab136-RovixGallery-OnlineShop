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
	discounted?: boolean;
	page?: number;
	product: Product[];
};

const containerVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { staggerChildren: 0.02 },
	},
};

export function ProductSliderContainer({
	discounted = false,
	page,
	product,
}: ProductSliderContainerProps) {
	return (
		<section className="w-70 sm:w-150 md:min-w-full overflow-hidden">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				className="w-full overflow-hidden"
			>
				<Swiper
					key={page}
					modules={[FreeMode, Navigation, Autoplay]}
					spaceBetween={8}
					freeMode
					grabCursor
					navigation={true}
					autoplay={{ delay: 4000 }}
					slidesPerView={1}
					breakpoints={{
						360: { slidesPerView: 2, spaceBetween: 10 },
						640: { slidesPerView: 3.5, spaceBetween: 10 },
						1024: { slidesPerView: 4.5, spaceBetween: 10 },
						1280: { slidesPerView: 6, spaceBetween: 10 },
					}}
					className="w-full overflow-hidden group/swiper"
				>
					{product.length > 0 ? (
						product.map((item) => (
							<SwiperSlide
								key={item._id}
								className="w-full py-5 flex justify-center overflow-hidden!"
							>
								<ProductCardMinimal
									id={item._id}
									discounted={discounted}
									isFavorite={false}
									rating={item.popularity}
									images={item.images}
									name={item.name}
									brand={item.brand}
									price={item.price}
								/>
							</SwiperSlide>
						))
					) : (
						<div className="w-full min-h-80 rounded-sm bg-radial via-transparent from-(--color-gold)/40 to-transparent flex flex-col justify-center items-center text-[14px]">
							موردی برای نمایش وجود ندارد
						</div>
					)}
				</Swiper>
			</motion.div>
		</section>
	);
}

"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

interface GalleryProps {
	images: string[];
}

export default function ProductGallery({ images }: GalleryProps) {
	return (
		<div className="group/swiper relative w-full">
			<Swiper navigation loop className="rounded-lg overflow-hidden">
				{images.map((img, i) => (
					<SwiperSlide key={i}>
						<Image
							src={img}
							alt={`product-${i}`}
							className="object-cover w-full h-112.5"
							width={500}
							height={500}
							loading="eager"
							priority
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

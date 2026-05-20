"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { EffectFade, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface GalleryProps {
	images: string[];
}

export default function ProductGallery({ images }: GalleryProps) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

	return (
		<div className="group/swiper w-full flex flex-col gap-0 relative overflow-hidden">
			<Swiper
				modules={[Navigation, Thumbs, EffectFade]}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				speed={600}
				navigation
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				className="w-full rounded-sm overflow-hidden"
			>
				{images.map((img, i) => (
					<SwiperSlide key={i} className="aspect-5/3">
						<div className="w-full">
							<Image
								src={img}
								alt={`product-${i}`}
								fill
								className="object-cover"
								priority={i === 0}
								loading="eager"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				onSwiper={setThumbsSwiper}
				modules={[FreeMode, Thumbs]}
				watchSlidesProgress
				slidesPerView={4}
				spaceBetween={0}
				freeMode
				className="w-full h-full overflow-hidden"
			>
				{images.map((img, i) => (
					<SwiperSlide
						key={i}
						className="thumb-slide-wrapper cursor-pointer rounded-sm overflow-hidden border-2 border-transparent transition-all duration-300"
					>
						<div className="relative w-full h-full">
							<Image src={img} alt={`thumb-${i}`} width={200} height={200} />
							<div className="thumb-overlay absolute inset-0 bg-black transition-opacity duration-300" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

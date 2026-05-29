"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1024);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="group/swiper flex flex-col md:flex-row-reverse gap-4 h-60 md:h-130 w-full relative overflow-hidden">
			<Swiper
				modules={[Navigation, Thumbs, EffectFade]}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				speed={600}
				navigation
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				className="w-full flex-5 rounded-sm overflow-hidden"
			>
				{images.map((img, i) => (
					<SwiperSlide key={i} className="aspect-square relative">
						<div className="w-full h-full relative">
							<Image
								unoptimized
								src={img}
								alt={`product-${i}`}
								fill
								className="object-contain"
								priority={i === 0}
								loading="eager"
							/>
						</div>
						{/* background blur */}
						<div className="w-full h-full blur-3xl absolute">
							<Image
								unoptimized
								src={img}
								alt={`product-${i}-back`}
								fill
								className="object-cover overflow-auto"
								loading="lazy"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				onSwiper={setThumbsSwiper}
				modules={[FreeMode, Thumbs]}
				watchSlidesProgress
				slidesPerView={isMobile ? 4 : 5}
				direction={isMobile ? "horizontal" : "vertical"}
				spaceBetween={8}
				freeMode
				className="w-full md:w-24 lg:h-full flex-none"
			>
				{images.map((img, i) => (
					<SwiperSlide
						key={i}
						className="thumb-slide-wrapper aspect-square  cursor-pointer rounded-sm overflow-hidden border-2 border-transparent transition-all duration-300"
					>
						<div className="relative w-full h-full">
							<Image
								unoptimized
								src={img}
								alt={`thumb-${i}`}
								fill
								className="object-cover"
							/>
							<div className="thumb-overlay absolute inset-0 bg-black transition-opacity duration-300" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

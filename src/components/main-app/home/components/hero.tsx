"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// تصاویر
import hero1 from "@/assets/img/hero/homepage-banner-2.webp";
import hero2 from "@/assets/img/hero/homepage-banner-4.webp";
import hero3 from "@/assets/img/hero/homepage-banner-5.webp";

// LOGO

import rovixLogo from "@/assets/img/rovix-logo-2.png";

const slides = [
	{
		id: 1,
		image: hero1,
		title: "زمان خود را خاص بسازید",
		text: "مجموعه‌ای از بهترین برندهای ساعت لوکس در RovixGallery",
	},
	{
		id: 2,
		image: hero2,
		title: "ترکیبی از دقت و زیبایی",
		text: "ساعت‌هایی که زمان را با شکوه تعریف می‌کنند",
	},
	{
		id: 3,
		image: hero3,
		title: "زمان برای درخشش شماست",
		text: "رویکسی از ظرافت و مهندسی زمان",
	},
];

export default function HeroSlider() {
	return (
		<section className="relative w-screen h-50 sm:h-80 md:h-150 overflow-hidden">
			<Swiper
				modules={[Navigation, Pagination, Autoplay, EffectFade]}
				slidesPerView={1}
				navigation={{
					nextEl: ".custom-next",
					prevEl: ".custom-prev",
				}}
				pagination={{
					el: ".custom-progress",
					type: "progressbar",
				}}
				effect="fade"
				autoplay={{ delay: 6000, disableOnInteraction: false }}
				loop
				className="hero-swiper h-full w-full"
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className="relative w-full h-full group">
							<Image
								src={slide.image}
								alt={slide.title}
								fill
								className="object-cover transition-transform duration-2000 group-hover:scale-105"
								priority
							/>
							<div className="w-full h-full relative bg-linear-0 from-black/50 to-(--color-dark-green)/40 backdrop-blur-[0px] hover:bg-black/30 hover:backdrop-blur-[2px] flex flex-row justify-center items-center text-center gap-1 text-white px-4 transition-all ease-in-out duration-700">
								<div className="flex-1 hidden sm:flex flex-col justify-center items-center">
									<div className="w-10">
										<Image
											alt="rovix-logo"
											src={rovixLogo}
											width={500}
											height={500}
											className=""
										/>
									</div>
									<div>{"wepogihowihg"}</div>
								</div>
								<div className="flex-1 flex flex-col justify-center items-center text-center gap-0 text-white px-4 transition-all ease-in-out duration-70">
									<h1 className="text-[14px] sm:text-2xl md:text-3xl font-extrabold mb-3 tracking-tight drop-shadow-lg">
										{slide.title}
									</h1>
									<p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-lg mb-8 opacity-90">
										{slide.text}
									</p>
									<Link
										href="/products"
										className="text-[8px] md:text-[14px] lg:text-lg bg-(--color-gold) hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-md transition-transform transform hover:scale-105"
									>
										مشاهده محصولات
									</Link>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur  text-green-400 hover:bg-(--color-accent-green) hover:text-white cursor-pointer transition-all duration-300">
				❯
			</div>
			<div className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur  text-green-400 hover:bg-(--color-accent-green) hover:text-white cursor-pointer transition-all duration-300">
				❮
			</div>

			<div className="custom-progress absolute bottom-0 left-0 w-full h-1 bg-white/20">
				<div className="swiper-pagination-progressbar-fill bg-(--color-accent-green)"></div>
			</div>
		</section>
	);
}

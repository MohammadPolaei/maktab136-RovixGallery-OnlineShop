"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Images
import hero1 from "@/assets/img/hero/homepage-banner-6.webp";
import hero2 from "@/assets/img/hero/homepage-banner-4.webp";
import hero3 from "@/assets/img/hero/homepage-banner-5.webp";
import AboutModal from "@/components/shared/about-modal";

// text section

const slides = [
	{
		id: 1,
		image: hero2,
		title: "ترکیبی از دقت و زیبایی",
		text: "ساعت‌هایی که زمان را با شکوه تعریف می‌کنند",
	},
	{
		id: 2,
		image: hero1,
		title: "زمان خود را خاص بسازید",
		text: "مجموعه‌ای از بهترین برندهای ساعت لوکس در RovixGallery",
	},
	{
		id: 3,
		image: hero3,
		title: "زمان برای درخشش شماست",
		text: "رویکس ، نمایانگر ظرافت و مهندسی زمان",
	},
];

// about brand section

const container: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.25,
			delayChildren: 0.3,
		},
	},
};

// div motion

export default function HeroSlider() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="group/swiper relative w-screen h-50 sm:h-80 md:h-150 overflow-hidden bg-black">
			<Swiper
				modules={[Navigation, Pagination, Autoplay, EffectFade]}
				slidesPerView={1}
				effect="fade"
				navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
				pagination={{ el: ".custom-progress", type: "progressbar" }}
				autoplay={{ delay: 6000, disableOnInteraction: false }}
				loop
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				className="hero-swiper h-full w-full"
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={slide.id}>
						<div className="relative w-full h-full flex items-center justify-center overflow-hidden">
							<motion.div
								className="absolute inset-0 z-0"
								initial={{ scale: 1 }}
								animate={activeIndex === index ? { scale: 1.15 } : { scale: 1 }}
								transition={{ duration: 8, ease: "linear" }}
							>
								<Image
									src={slide.image}
									alt={slide.title}
									fill
									className="object-cover"
									priority
								/>
							</motion.div>

							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10"></div>

							<div className="relative z-10 w-4/5 h-full flex flex-row justify-center items-center text-white px-4">
								<div className="flex-1 flex flex-col items-center justify-center text-center gap-2 px-2">
									<AnimatePresence mode="wait">
										{activeIndex === index && (
											<>
												<motion.h1
													key={"title-" + index}
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -20 }}
													transition={{ duration: 0.7, delay: 0.3 }}
													className="text-[14px] sm:text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-lg"
												>
													{slide.title}
												</motion.h1>

												<motion.p
													key={"text-" + index}
													initial={{ opacity: 0, y: 30 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -30 }}
													transition={{ duration: 0.8, delay: 0.5 }}
													className="text-[10px] sm:text-[12px] md:text-[14px] mb-4 opacity-85"
												>
													{slide.text}
												</motion.p>

												<motion.div
													key={"btn-" + index}
													initial={{ opacity: 0, scale: 0.95 }}
													animate={{ opacity: 1, scale: 1 }}
													exit={{ opacity: 0, scale: 0.9 }}
													transition={{ duration: 0.6, delay: 0.7 }}
												>
													<Link
														href="/products"
														className="text-[8px] md:text-[14px] lg:text-lg bg-(--color-gold) hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-sm transition-all hover:scale-105 ease-in-out duration-500"
													>
														مشاهده محصولات
													</Link>
												</motion.div>
											</>
										)}
									</AnimatePresence>
								</div>
								<motion.div
									className="flex-1 hidden sm:flex flex-col items-center justify-center text-center px-6"
									variants={container}
									initial="hidden"
									animate="show"
								>
									<AboutModal
										title="تجربه‌ای متمایز از زیبایی، کیفیت و اعتماد"
										description="ما با تکیه بر استانداردهای حرفه‌ای، محصولات و خدماتی را ارائه می‌دهیم
					که در کنار زیبایی، بر کیفیت، اصالت و رضایت شما تمرکز دارند. هدف ما خلق
					تجربه‌ای متفاوت، دقیق و ماندگار برای همراهان برند است."
									/>
								</motion.div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* دکمه قبلی */}
			<div className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 hidden md:flex items-center justify-center rounded-full bg-white/20 backdrop-blur text-green-400 hover:bg-(--color-accent-green) hover:text-white cursor-pointer transition-all duration-300">
				❯
			</div>

			{/* دکمه بعدی */}
			<div className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 hidden md:flex items-center justify-center rounded-full bg-white/20 backdrop-blur text-green-400 hover:bg-(--color-accent-green) hover:text-white cursor-pointer transition-all duration-300">
				❮
			</div>

			<div className="custom-progress absolute bottom-0 left-0 w-full h-1 bg-white/20 overflow-hidden"></div>
		</section>
	);
}

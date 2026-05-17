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
import hero1 from "@/assets/img/hero/homepage-banner-2.webp";
import hero2 from "@/assets/img/hero/homepage-banner-4.webp";
import hero3 from "@/assets/img/hero/homepage-banner-5.webp";
import rovixLogo from "@/assets/img/rovix-logo-1.png";

// text section

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

const fadeUp: Variants = {
	hidden: {
		opacity: 0,
		y: 30,
		filter: "blur(6px)",
	},
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.9,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

const logoVariant: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.85,
	},
	show: {
		opacity: 0.9,
		scale: 1,
		transition: {
			duration: 1.2,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

// div motion

const DivFadeBlurIn = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				filter: "blur(12px)",
				y: 10,
			}}
			animate={{
				opacity: 1,
				filter: "blur(0px)",
				y: 0,
			}}
			transition={{
				duration: 0.9,
				ease: [0.16, 1, 0.3, 1],
			}}
			className="flex flex-col justify-center items-center gap-1 bg-(--color-accent-green)/20 rounded-lg border border-white/10 backdrop-blur-[5px] px-5 py-2 md:py-10 
		 min-h-full"
		>
			{children}
		</motion.div>
	);
};

export default function HeroSlider() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="relative w-screen h-50 sm:h-80 md:h-150 overflow-hidden bg-black">
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
														className="text-[8px] md:text-[14px] lg:text-lg bg-(--color-gold) hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-md transition-all hover:scale-105 ease-in-out duration-500"
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
									<DivFadeBlurIn>
										<motion.div
											className="mb-0"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.8 }}
										>
											<div className="relative md:h-50 h-30 md:w-50 w-30 overflow-hidden">
												<motion.div
													className="relative h-full w-full"
													animate={{
														scale: [1, 1.1, 1],
														filter: [
															"brightness(1)",
															"brightness(1.08)",
															"brightness(1)",
														],
													}}
													transition={{
														duration: 0.9,
														ease: [0.4, 0, 0.2, 1],
														repeat: Infinity,
														repeatDelay: 3,
													}}
													style={{
														willChange: "transform, filter",
														transformOrigin: "center center",
													}}
												>
													<Image
														src={rovixLogo}
														alt="rovix-logo"
														fill
														priority
														className="object-contain opacity-90"
													/>

													<motion.div
														className="absolute inset-0 pointer-events-none"
														animate={{
															x: ["-150%", "150%"],
															opacity: [0, 1, 0],
														}}
														transition={{
															duration: 0.6,
															ease: [0.4, 0, 0.2, 1],
															repeat: Infinity,
															repeatDelay: 3,
														}}
														style={{
															background:
																"linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
															mixBlendMode: "screen",
														}}
													/>
												</motion.div>
											</div>
										</motion.div>
										<motion.div className="space-y-4 max-w-md">
											<motion.h1
												variants={fadeUp}
												className="text-[12px] md:text-lg font-semibold tracking-tight text-white leading-snug"
											>
												تجربه‌ای متمایز از زیبایی، کیفیت و اعتماد
											</motion.h1>

											<motion.p
												variants={fadeUp}
												className="text-[8px] md:text-[12px] lg:text-[14px] leading-4 md:leading-8 text-white/70"
											>
												ما با تکیه بر استانداردهای حرفه‌ای، محصولات و خدماتی را
												ارائه می‌دهیم که در کنار زیبایی، بر کیفیت، اصالت و رضایت
												شما تمرکز دارند. هدف ما خلق تجربه‌ای متفاوت، دقیق و
												ماندگار برای همراهان برند است.
											</motion.p>
										</motion.div>
									</DivFadeBlurIn>
								</motion.div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur text-green-400 hover:bg-(--color-accent-green) hover:text-white cursor-pointer transition-all duration-300">
				❯
			</div>
			<div className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur text-green-400 hover:bg-(--color-accent-green) hover:text-white cursor-pointer transition-all duration-300">
				❮
			</div>

			<div className="custom-progress absolute bottom-0 left-0 w-full h-1 bg-white/20 overflow-hidden"></div>
		</section>
	);
}

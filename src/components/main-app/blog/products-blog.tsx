"use client";

import watchImage from "@/assets/img/blog/image.png";
import rovixGalleryLogo from "@/assets/img/rovix-logo-2.png";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const container: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.15,
		},
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.55,
			ease: "easeOut",
		},
	},
};

export default function ProductsBlog() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const parallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

	return (
		<motion.section
			ref={ref}
			variants={container}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className="max-w-screen mx-auto px-6 py-10 leading-8 text-gray-800 dark:text-gray-200 text-[12px] bg-white rounded-sm relative overflow-hidden"
		>
			{/* Header */}
			<motion.div
				variants={item}
				className="w-full flex flex-col justify-center items-center bg-white/40 backdrop-blur-[6px] rounded-b-sm sticky top-0 z-20"
			>
				<Image
					alt="Rovix Gallery"
					src={rovixGalleryLogo}
					width={2500}
					height={2500}
					className="w-10"
				/>

				<h1 className="text-sm md:text-md font-bold text-center text-emerald-700 mb-6">
					خرید ساعت مچی از رویکس گالری
				</h1>
			</motion.div>

			<motion.p variants={item} className="mb-6 text-justify">
				فروشگاه اینترنتی <strong>RovixGallery | رویکس گالری</strong> با هدف
				ارائه مجموعه‌ای از بهترین و معتبرترین ساعت‌های مچی جهان، بستری مطمئن
				برای انتخاب و خرید ساعت اصل فراهم کرده است. در رویکس گالری می‌توانید
				تنوعی کامل از برندهای جهانی مانند
				<strong>
					{" "}
					Rolex، Omega، Casio، Citizen، Seiko، Orient، Hamilton، Longines،
					Tissot و Tag Heuer{" "}
				</strong>
				مشاهده کنید.
			</motion.p>

			<motion.p variants={item} className="mb-10 text-justify">
				رویکس گالری تلاش می‌کند تجربه‌ای فراتر از یک خرید ساده برای شما فراهم
				کند — تجربه‌ای همراه با اطمینان از اصالت کالا، پشتیبانی تخصصی، و ارسال
				سریع.
			</motion.p>

			<motion.div variants={item}>
				<h2 className="text-sm font-semibold text-emerald-700 mb-4">
					چرا خرید از رویکس گالری؟
				</h2>

				<ul className="list-disc pr-6 mb-8 space-y-2">
					<li>تضمین اصالت کالا و ارائه کارت گارانتی معتبر</li>
					<li>تنوع بی‌نظیر از برندهای جهانی</li>
					<li>امکان فیلتر، جستجو و مرتب‌سازی پیشرفته</li>
					<li>ارسال سریع و بسته‌بندی ایمن</li>
					<li>پشتیبانی آنلاین و مشاوره انتخاب ساعت</li>
				</ul>
			</motion.div>

			{/* Image with Parallax */}
			<div className="rounded-sm py-10 overflow-hidden">
				<Image
					draggable={false}
					src={watchImage}
					alt="watch"
					className="w-full rounded-sm"
					width={2500}
					height={2500}
				/>
			</div>

			<motion.h2
				variants={item}
				className="text-sm font-semibold text-emerald-700 mb-4"
			>
				راهنمای خرید ساعت مچی
			</motion.h2>

			<motion.p variants={item} className="mb-6 text-justify">
				برای انتخاب یک ساعت مناسب، بهتر است چند نکته مهم را در نظر بگیرید:
			</motion.p>

			<motion.div variants={item}>
				<h3 className="text-[12px] font-semibold text-emerald-600 mb-2">
					۱. جنس بدنه و بند
				</h3>

				<p className="mb-4 text-justify">
					ساعت‌های استیل و تیتانیوم مناسب استفاده روزانه‌اند. مدل‌های چرمی
					سبک‌تر بوده و برای استایل رسمی گزینه‌ای زیبا هستند.
				</p>
			</motion.div>

			<motion.div variants={item}>
				<h3 className="text-[12px] font-semibold text-emerald-600 mb-2">
					۲. نوع موتور (Movement)
				</h3>

				<p className="mb-4 text-justify">
					ساعت‌های <strong>کوارتز</strong> دقت بالا دارند. اگر تجربه‌ای لوکس‌تر
					می‌خواهید، ساعت‌های <strong>اتوماتیک</strong> انتخابی ماندگارند.
				</p>
			</motion.div>

			<motion.div variants={item}>
				<h3 className="text-[12px] font-semibold text-emerald-600 mb-2">
					۳. مقاومت در برابر آب
				</h3>

				<p className="mb-4 text-justify">
					اگر فعالیت روزانه شما شامل ورزش یا شست‌وشو است، ساعت خود را بر اساس
					درجه مقاومت در برابر آب انتخاب کنید.
				</p>
			</motion.div>

			<motion.div variants={item}>
				<h3 className="text-[12px] font-semibold text-emerald-600 mb-2">
					۴. سبک استفاده
				</h3>

				<ul className="list-disc pr-6 mb-6 space-y-1">
					<li>کلاسیک برای استایل رسمی</li>
					<li>اسپرت برای استفاده روزمره</li>
					<li>لاکچری برای مناسبت‌های خاص</li>
				</ul>
			</motion.div>

			<motion.div variants={item} className="text-center mt-10 pt-6">
				<p className="text-lg font-semibold text-emerald-700">
					با رویکس گالری، زمان را با سلیقه‌تان بسازید
				</p>
			</motion.div>
		</motion.section>
	);
}

"use client";

import SectionTitle from "@/components/base/section-title";

import bgImage from "@/assets/img/support-section/rovix_support_banner.webp";
import { faNumber } from "@/utils/convert-number-into-persian";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

import imageSupp2 from "@/assets/img/support-section/rovix_fast_shipping_outline.webp";
import imageSupp3 from "@/assets/img/support-section/rovix_originality_guarantee_outline.webp";
import imageSupp1 from "@/assets/img/support-section/rovix_return_exchange_14days_outline.webp";
import imageSupp4 from "@/assets/img/support-section/rovix_secure_payment_outline.webp";
import imageSupp5 from "@/assets/img/support-section/rovix_secure_purchase_outline.webp";
import imageSupp6 from "@/assets/img/support-section/rovix_support_24h_outline.webp";
import { GoldenTitle } from "./golden-title";

const supportText = [
	{
		title: "پشتیبانی ۲۴ ساعته",
		text: "تیم پشتیبانی ما در تمام ساعات شبانه‌روز پاسخگوی سوالات و درخواست‌های شماست.",
	},
	{
		title: "پرداخت امن",
		text: "تمامی تراکنش‌ها از طریق درگاه‌های معتبر و با رمزنگاری پیشرفته انجام می‌شود.",
	},
	{
		title: "ضمانت اصالت کالا",
		text: "تمامی محصولات با تضمین اصل بودن و کیفیت معتبر ارائه می‌شوند.",
	},
	{
		title: "ارسال سریع و مطمئن",
		text: "سفارش‌ها در کوتاه‌ترین زمان ممکن و با بسته‌بندی ایمن ارسال می‌شوند.",
	},
	{
		title: "۱۴ روز ضمانت بازگشت",
		text: "تا ۱۴ روز پس از دریافت، امکان بازگرداندن کالا طبق شرایط وجود دارد.",
	},
];

const supportContents = [
	{ title: "مرجوعی و تعویض ۱۴ روز", image: imageSupp1 },
	{ title: "ارسال سریع", image: imageSupp2 },
	{ title: "پرداخت امن", image: imageSupp4 },
	{ title: "گارانتی اصل", image: imageSupp3 },
	{ title: "خرید امن", image: imageSupp5 },
	{ title: "پشتیبانی 24/7", image: imageSupp6 },
];
const itemVariants: Variants = {
	initial: { opacity: 0, scale: 0.8, y: 20 },
	animate: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
		},
	},
	hover: {
		scale: 1.08,
		y: -5,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20,
		},
	},
};

const leftVariants: Variants = {
	hidden: { opacity: 0, x: -80 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1.1, ease: "easeOut" },
	},
};

const rightVariants: Variants = {
	hidden: { opacity: 0, x: 80 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1.1, ease: "easeOut" },
	},
};

const greenItemVariants: Variants = {
	hidden: { opacity: 0, y: 25 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export default function SupportSection() {
	return (
		<div className="w-full flex flex-col justify-center items-center gap-1 py-1 px-4">
			<SectionTitle title={`پشتیبانی ${faNumber(24)}/${faNumber(7)}`} />
			<div className="grid lg:hidden grid-cols-2 md:grid-cols-3 place-items-center py-5 text-center text-[16px] w-full max-w-4xl mx-auto bg-(--color-dark-green)/20 rounded-sm">
				{supportContents.map((item) => {
					return (
						<motion.div
							key={item.title}
							variants={itemVariants}
							initial="initial"
							animate="animate"
							whileHover="hover"
							className="flex flex-col justify-center items-center gap-2 m-4 cursor-pointer"
						>
							<motion.div className="w-20 h-20 md:w-24 md:h-24 rounded-[80%] bg-(--color-gold) hover:bg-(--color-gold-dark)/20 transition-all duration-500 ease-in-out relative">
								<Image
									unoptimized
									alt={item.title}
									src={item.image}
									layout="fill"
									objectFit="contain"
								/>
							</motion.div>
							<motion.span className="text-[10px] md:text-[14px] font-semibold text-gray-700">
								{item.title}
							</motion.span>
						</motion.div>
					);
				})}
			</div>
			{/* desktop support show */}
			<div className="w-full overflow-hidden hidden lg:flex justify-center items-center relative">
				<motion.div
					className="w-full overflow-hidden hidden lg:flex justify-center items-center relative"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					{/* ========= Left Image ========= */}
					<motion.div className="flex-3" variants={leftVariants}>
						<Image
							src={bgImage}
							alt="پشتیبانی"
							width={1000}
							height={800}
							className="rounded-r-md object-cover w-full h-auto"
							priority
						/>
					</motion.div>

					{/* ========= Right Panel ========= */}
					<motion.div
						className="h-150 flex-2 px-8 rounded-md 
        flex flex-col justify-evenly 
        bg-(--color-darkest) 
        text-white text-center 
        overflow-hidden relative"
						variants={rightVariants}
					>
						{/* Gold Shine Sweep */}
						<motion.div
							className="absolute inset-0 
          bg-linear-to-r 
          from-transparent 
          via-[rgba(255,215,0,0.15)] 
          to-transparent"
							animate={{ x: ["-100%", "100%"] }}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "linear",
							}}
							style={{
								mixBlendMode: "soft-light",
								backgroundSize: "200% 100%",
							}}
						/>

						{/* Text Items */}
						<div className="relative z-10 text-[12px] space-y-8">
							{supportText.map((item, i) => (
								<motion.div
									key={i}
									variants={itemVariants}
									className="flex flex-col items-center gap-2 text-white/90"
								>
									<GoldenTitle>{item.title}</GoldenTitle>
									{item.text}
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

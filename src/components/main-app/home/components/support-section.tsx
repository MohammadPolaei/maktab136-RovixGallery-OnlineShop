"use client";

import SectionTitle from "@/components/base/section-title";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

import imageSupp2 from "@/assets/img/support-section/rovix_fast_shipping_outline.webp";
import imageSupp3 from "@/assets/img/support-section/rovix_originality_guarantee_outline.webp";
import imageSupp1 from "@/assets/img/support-section/rovix_return_exchange_14days_outline.webp";
import imageSupp4 from "@/assets/img/support-section/rovix_secure_payment_outline.webp";
import imageSupp5 from "@/assets/img/support-section/rovix_secure_purchase_outline.webp";
import imageSupp6 from "@/assets/img/support-section/rovix_support_24h_outline.webp";

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

export default function SupportSection() {
	return (
		<div className="w-full flex flex-col justify-center items-center gap-1 py-12 px-4">
			<SectionTitle title="پشتیبانی 24/7" />
			<div className="flex flex-wrap justify-evenly items-center text-center text-[16px] w-full max-w-5xl mx-auto">
				{supportContents.map((item) => {
					return (
						<motion.div
							key={item.title}
							variants={itemVariants}
							initial="initial"
							animate="animate"
							whileHover="hover"
							className="flex flex-col justify-center items-center gap-2 m-4"
						>
							<motion.div className="w-20 h-20 md:w-24 md:h-24 relative">
								<Image
									alt={item.title}
									src={item.image}
									layout="fill"
									objectFit="contain"
								/>
							</motion.div>
							<motion.span className="text-sm md:text-base font-semibold text-gray-700">
								{item.title}
							</motion.span>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

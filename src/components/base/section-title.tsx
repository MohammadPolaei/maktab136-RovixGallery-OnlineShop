"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
	title: string;
};

export default function SectionTitle({ title }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "-120px" });

	return (
		<div
			ref={ref}
			className="flex flex-col items-center py-5 overflow-hidden w-full"
		>
			{/* خط + عنوان */}
			<div className="flex items-center gap-1 md:gap-4 max-w-full px-1 md:px-4">
				{" "}
				{/* خط چپ */}
				<motion.div
					initial={{ x: -120, opacity: 0, filter: "blur(8px)" }}
					animate={inView ? { x: 0, opacity: 1, filter: "blur(0px)" } : {}}
					transition={{ duration: 0.9, delay: 0.2 }}
					className="relative w-24 h-[1.5px] overflow-hidden"
					style={{
						background:
							"linear-gradient(to right, #D4AF37, rgba(212,175,55,0))",
					}}
				>
					{/* shine */}
					<motion.div
						animate={{ x: ["-120%", "120%"] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "linear",
						}}
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
							filter: "blur(4px)",
						}}
					/>
				</motion.div>
				{/* متن */}
				<motion.h2
					initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
					animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
					transition={{ duration: 0.8, delay: 0.35 }}
					className="text-[12px] sm:tsxt-[18px] md:text-[20px] font-semibold tracking-wider text-gray-800"
				>
					{title}
				</motion.h2>
				{/* خط راست */}
				<motion.div
					initial={{ x: 120, opacity: 0, filter: "blur(8px)" }}
					animate={inView ? { x: 0, opacity: 1, filter: "blur(0px)" } : {}}
					transition={{ duration: 0.9, delay: 0.2 }}
					className="relative w-24 h-[1.5px] overflow-hidden"
					style={{
						background: "linear-gradient(to left, #D4AF37, rgba(212,175,55,0))",
					}}
				>
					<motion.div
						animate={{ x: ["120%", "-120%"] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "linear",
						}}
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
							filter: "blur(4px)",
						}}
					/>
				</motion.div>
			</div>
		</div>
	);
}

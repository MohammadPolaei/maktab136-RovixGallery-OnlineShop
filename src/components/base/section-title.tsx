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
			{/* تاج */}
			<motion.div
				initial={{ opacity: 0, y: -15, filter: "blur(8px)" }}
				animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
				transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
				className="relative mb-1"
			>
				<svg
					width="44"
					height="20"
					viewBox="0 0 64 24"
					fill="none"
					className="text-[#D4AF37]"
				>
					<path
						d="M4 20L12 8L22 18L32 4L42 18L52 8L60 20"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>

					<circle cx="12" cy="8" r="2" fill="currentColor" />
					<circle cx="32" cy="4" r="2.4" fill="currentColor" />
					<circle cx="52" cy="8" r="2" fill="currentColor" />
				</svg>

				{/* shine تاج */}
				<motion.div
					className="absolute inset-0"
					animate={{ x: ["-120%", "120%"] }}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						background:
							"linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.7) 50%, transparent 80%)",
						filter: "blur(6px)",
					}}
				/>
			</motion.div>

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

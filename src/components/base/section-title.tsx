"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ title }: { title: string }) {
	return (
		<div className="w-full flex items-center justify-center py-6 select-none">
			<div className="flex items-center gap-3 relative">
				{/* خط چپ */}
				<div className="relative overflow-hidden">
					<motion.span
						initial={{ opacity: 0, scaleX: 0.6 }}
						animate={{ opacity: 1, scaleX: 1 }}
						transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
						className="block h-0.5 w-16 bg-linear-to-r from-[#e7d08c] via-[#c8a75a] to-transparent shadow-[0_0_8px_rgba(200,167,90,0.6)]"
					></motion.span>

					{/* افکت براق در حال حرکت */}
					<motion.span
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 70, opacity: 0.7 }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: "loop",
							ease: "easeInOut",
						}}
						className="absolute top-0 left-0 h-0.5 w-8 bg-white/60 blur-1"
					></motion.span>
				</div>

				{/* متن */}
				<span className="text-[18px] font-bold text-gray-800">{title}</span>

				{/* خط راست */}
				<div className="relative overflow-hidden">
					<motion.span
						initial={{ opacity: 0, scaleX: 0.6 }}
						animate={{ opacity: 1, scaleX: 1 }}
						transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
						className="block h-0.5 w-16 bg-linear-to-l from-[#e7d08c] via-[#c8a75a] to-transparent shadow-[0_0_8px_rgba(200,167,90,0.6)]"
					></motion.span>

					{/* افکت براق در حال حرکت */}
					<motion.span
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: -70, opacity: 0.7 }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: "loop",
							ease: "easeInOut",
						}}
						className="absolute top-0 right-0 h-0.5 w-8 bg-white/60 blur-1"
					></motion.span>
				</div>
			</div>
		</div>
	);
}

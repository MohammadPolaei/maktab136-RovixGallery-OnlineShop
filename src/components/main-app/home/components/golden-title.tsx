import { motion } from "framer-motion";

export function GoldenTitle({ children }: { children: string }) {
	return (
		<motion.h2
			className="relative inline-block text-[18px] font-bold text-transparent bg-clip-text"
			style={{
				backgroundImage:
					"linear-gradient(90deg, #b3914f, #e4c177, #fff2c6, #e4c177, #b3914f)",
				backgroundSize: "200% auto",
			}}
			animate={{ backgroundPosition: ["0% center", "200% center"] }}
			transition={{
				duration: 3,
				repeat: Infinity,
				ease: "linear",
			}}
		>
			{children}
		</motion.h2>
	);
}

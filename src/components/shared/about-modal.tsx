import rovixLogo from "@/assets/img/rovix-logo-1.png";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

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
			className="flex flex-col justify-center items-center gap-1 bg-(--color-accent-green)/20 rounded-sm border border-white/10 backdrop-blur-[5px] px-5 py-2 md:py-10 
		 min-h-full"
		>
			{children}
		</motion.div>
	);
};
export default function AboutModal({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
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
							filter: ["brightness(1)", "brightness(1.08)", "brightness(1)"],
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
					{title}
				</motion.h1>

				<motion.p
					variants={fadeUp}
					className="text-[8px] md:text-[12px] lg:text-[14px] leading-4 md:leading-8 text-white/70"
				>
					{description}
				</motion.p>
			</motion.div>
		</DivFadeBlurIn>
	);
}

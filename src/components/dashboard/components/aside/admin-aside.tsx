"use client";
import backgroundImage from "@/assets/img/dashboard-photos/dashboard-side-background.webp";
import Image from "next/image";
import { useState } from "react";
import HamburgerButton from "./hamburger-button";
import { SidebarLinks } from "./navigation/side-bar-links";

export function AdminAside() {
	const [openSidebar, setOpenSidebar] = useState(true);
	return (
		<div>
			<HamburgerButton onclick={() => setOpenSidebar(!openSidebar)} />
			<div
				className={`${
					openSidebar
						? "opacity-100 w-50 fixed md:relative"
						: "opacity-0 w-0 fixed md:relative"
				}
			z-10
			transition-all
			duration-500
			ease-in-out`}
			>
				<aside
					className="w-full
				relative
				h-screen
				flex
				flex-col
				text-(--color-bg)
				shadow-xl
				bg-(--color-super-dark-green)
				transition-all
				duration-500
				ease-in-out
				"
				>
					{/* Logo */}
					<div className="border-b border-(--color-dark-green) py-7 flex flex-col items-center z-10">
						<div className="text-4xl font-bold text-gold">R</div>

						<p className="mt-3 text-sm tracking-widest">ROVIXGALLERY</p>

						<span className="text-xs text-gold-dark">TIMELESS ELEGANCE</span>
					</div>

					{/* Links */}
					<div className="w-full overflow-y-auto z-10">
						<SidebarLinks />
					</div>
					<Image
						className="w-full absolute bottom-0"
						alt="watch"
						src={backgroundImage}
						loading="eager"
					/>
				</aside>
			</div>
		</div>
	);
}

"use client";
import backgroundImage from "@/assets/img/dashboard-photos/dashboard-side-background.webp";
import rovixLogoOne from "@/assets/img/rovix-logo-1.png";
import LogoutButton from "@/components/base/logut-button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HamburgerButton from "./hamburger-button";
import { SidebarLinks } from "./navigation/side-bar-links";

export function AdminAside() {
	const [openSidebar, setOpenSidebar] = useState(true);
	return (
		<div>
			<div
				className={`w-screen inset-0 bg-black/30 backdrop-blur-[3px] fixed z-10 md:w-0 ${
					openSidebar ? "" : "h-0"
				}`}
			></div>
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
						<Link href={"/"}>
							<Image src={rovixLogoOne.src} alt="" width={200} height={200} />
						</Link>
					</div>

					{/* Links */}
					<div className="w-full overflow-y-auto z-10">
						<SidebarLinks
							openSidebar={openSidebar}
							setOpenSidebar={setOpenSidebar}
						/>
						<div className="w-full">
							<LogoutButton />
						</div>
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

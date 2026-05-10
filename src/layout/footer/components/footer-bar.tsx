"use client";

import BackToTopIcon from "@/assets/SVG/footer-icons/back-to-top-icon";
import InstagramIconFooter from "@/assets/SVG/footer-icons/instagram-icon-footer";
import TelegramIconFooter from "@/assets/SVG/footer-icons/telegram-icon-footer";
import WhatsappIconFooter from "@/assets/SVG/footer-icons/whatsapp-icon-footer";
import { useEffect, useState } from "react";

export default function FooterBar() {
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		const sentinel = document.getElementById("footer-sentinel");
		if (!sentinel) return;
		// browser web api - checks if an element enters into the viewport . (IntersectionObserver) 👇
		const observer = new IntersectionObserver(
			([entry]) => {
				// callback => entry.isIntersecting => boolean .
				setExpanded(entry.isIntersecting);
			},
			{
				// options => threshold determines percentage of element entry
				threshold: 0.1,
			}
		);
		// observes element (sentinel here) to check if it enters or exits in viewport
		observer.observe(sentinel);
		// when component unmounts , observer.disconnect disconnects observer to clear and prevent memory leaks .
		return () => observer.disconnect();
	}, []);

	return (
		<div
			className={`fixed bottom-0 left-0 w-full text-[12px]
      transition-all ease-in-out duration-500
      ${
				expanded
					? "h-24 rovix-bg-dark-green rovix-text-gold"
					: "h-12 rovix-bg-darkest text-(--color-bg)"
			}`}
		>
			<div className="max-w-300 mx-auto flex items-center justify-between h-full px-6">
				<span className="w-fit flex flex-row items-center justify-center gap-3 text-[10px] rovix-text-light">
					از جدیدترین محصولات و تخفیف های ما مطلع شوید
					<div className="p-1 rounded-lg cursor-pointer origin-center hover:mb-4 hover:pb-6 hover:rounded-b-[50%] hover:scale-120 hover:bg-(--color-accent-green)/50 hover:backdrop-blur-sm hover:text-[#e4e4e4] transition-all ease-in-out duration-500">
						<InstagramIconFooter />
					</div>
					<div className="p-1 rounded-lg cursor-pointer origin-center hover:mb-4 hover:pb-6 hover:rounded-b-[50%] hover:scale-120 hover:bg-(--color-accent-green)/50 hover:backdrop-blur-sm hover:text-[#e4e4e4] transition-all ease-in-out duration-500">
						<TelegramIconFooter />
					</div>
					<div className="p-1 rounded-lg cursor-pointer origin-center hover:mb-4 hover:pb-6 hover:rounded-b-[50%] hover:scale-120 hover:bg-(--color-accent-green)/50 hover:backdrop-blur-sm hover:text-[#e4e4e4] transition-all ease-in-out duration-500">
						<WhatsappIconFooter />
					</div>
				</span>
				<button className="flex flex-row items-center justify-center gap-2 text-[12px] rounded-2xl p-3 cursor-pointer hover:bg-(--color-accent-green) active:text-[#e4e4e4] transition-all duration-500 ease-in-out">
					<BackToTopIcon />
					برگشت به بالا
				</button>
			</div>
		</div>
	);
}

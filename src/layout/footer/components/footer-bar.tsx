"use client";

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
			className={`fixed bottom-0 left-0 w-full 
      transition-all duration-300
      ${
				expanded
					? "h-24 rovix-bg-dark-green rovix-text-gold"
					: "h-12 rovix-bg-darkest text-(--color-bg)"
			}`}
		>
			<div className="max-w-6xl mx-auto flex items-center justify-between h-full px-6">
				<span>Footer Bar</span>
				<button className="text-sm">برگشت به بالای صفحه</button>
			</div>
		</div>
	);
}

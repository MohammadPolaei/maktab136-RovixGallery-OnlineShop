export default function WhatsAppIconFooter() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="#9c804c"
			strokeWidth="1.4"
			strokeLinecap="round"
			strokeLinejoin="round"
			width={24}
			height={24}
		>
			{/* دایره اصلی */}
			<circle cx="12" cy="12" r="9" />

			{/* دم حباب چت */}
			<path d="M8 20l-3 2 1.2-3.4" />

			{/* هندست واضح و شبیه نسخه رسمی واتساپ */}
			<path
				d="
				M15.6 14.7
				c-.3.5-1 .8-1.5.5
				-1.1-.5-2.6-1.7-3.5-3
				-.7-1-.8-1.9-.3-2.4
				l.8-.9
				c.4-.5.3-1.2-.1-1.6L10 6.4
				c-.4-.4-1-.4-1.4 0L7.7 7.4
				c-.8.8-1 2.4-.2 4
				1.3 2.4 3.6 4.5 5.9 5.5
				1.5.7 3.1.4 3.9-.3
				l1-1c.4-.4.5-1 .1-1.4l-1.1-1.1
				c-.4-.4-1.1-.5-1.6-.1l-1.1.7z
			"
			/>
		</svg>
	);
}

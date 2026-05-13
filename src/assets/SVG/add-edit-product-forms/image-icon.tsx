export default function ImageIcon() {
	return (
		<svg
			width={20}
			height={20}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="3" y="3" width="18" height="18" rx="3" />
			<path d="M3 16l4.5-4.5c.6-.6 1.6-.6 2.2 0L15 17" />
			<path d="M14 14l2-2c.6-.6 1.6-.6 2.2 0L21 15" />
			<circle cx="9" cy="8" r="2" />
		</svg>
	);
}

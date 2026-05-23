export function DeleteIcon({ size = 18 }: { size?: number }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M3 6h18" />
			<path d="M8 6V4h8v2" />
			<path d="M6 6l1 14h10l1-14" />
			<path d="M10 11v6" />
			<path d="M14 11v6" />
		</svg>
	);
}

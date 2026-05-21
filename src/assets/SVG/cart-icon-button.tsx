export default function CartIconButton({ size = 15 }: { size?: number }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="9" cy="21" r="1" />
			<circle cx="18" cy="21" r="1" />
			<path d="M1 1h4l3 12h11l3-8H6" />
		</svg>
	);
}

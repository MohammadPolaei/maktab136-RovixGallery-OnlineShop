export default function PasswordIcon({
	size = 25,
	className = "",
}: {
	size?: number;
	className?: string;
}) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			<rect x="4" y="11" width="16" height="9" rx="2" />
			<path d="M8 11V8a4 4 0 118 0v3" />
			<circle cx="12" cy="15" r="1" />
		</svg>
	);
}

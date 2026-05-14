const CircleIcon = () => {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 20 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="10" cy="10" r="10" />
		</svg>
	);
};

enum existingColors {
	"مشکی" = "#000000",
	"آبی" = "#2563EB",
	"نقره ای" = "#C0C0C0",
	"قهوه ای" = "#8B4513",
}

export default function ShowColorOnCard(color: string) {
	let colorCode = "";
	color == "مشکی"
		? (colorCode = "text-[#000000]")
		: color == "آبی"
		? (colorCode = "text-[#2563EB]")
		: color == "نقره ای"
		? (colorCode = "text-[#C0C0C0]")
		: (colorCode = "text-[#8B4513]");

	return (
		<div>
			<span className={`${colorCode} flex justify-center items-center gap-1`}>
				<span>رنگ بند</span>
				<CircleIcon />
			</span>
		</div>
	);
}

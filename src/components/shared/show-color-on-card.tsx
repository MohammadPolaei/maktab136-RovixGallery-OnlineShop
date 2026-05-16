export default function ShowColorOnCard(color: string) {
	let colorCode = "";
	color == "مشکی"
		? (colorCode = "#000000")
		: color == "آبی"
		? (colorCode = "#2563EB")
		: color == "نقره ای"
		? (colorCode = "#C0C0C0")
		: color == "سبز"
		? (colorCode = "#20A520")
		: color == "سفید"
		? (colorCode = "#FFF]")
		: color == "قهوه‌ای"
		? (colorCode = "#8B4513")
		: (colorCode = "#000");

	return (
		<div>
			<div
				className={`w-3 h-3 rounded-full border border-black/30 cursor-pointer`}
				style={{ backgroundColor: colorCode }}
			/>
		</div>
	);
}

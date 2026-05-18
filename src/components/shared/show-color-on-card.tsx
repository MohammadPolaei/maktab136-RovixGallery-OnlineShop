export default function ShowColorOnCard(color: string) {
	let colorCode = "";
	color == "مشکی"
		? (colorCode = "#263238")
		: color == "آبی"
		? (colorCode = "#93C5FD")
		: color == "نقره‌ای"
		? (colorCode = "#E2E8F0")
		: color == "سبز"
		? (colorCode = "#91F180")
		: color == "سفید"
		? (colorCode = "#FFF")
		: color == "قهوه‌ای"
		? (colorCode = "#7C4A2D")
		: (colorCode = "#000");

	return (
		<div>
			<div
				className={`w-3 h-3 rounded-full border border-black/10 cursor-pointer`}
				style={{ backgroundColor: colorCode }}
			/>
		</div>
	);
}

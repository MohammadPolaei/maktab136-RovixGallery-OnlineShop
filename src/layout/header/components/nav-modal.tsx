export default function NavModal({
	responsive,
}: {
	responsive: "mobile" | "desktop";
}) {
	return (
		<>
			{responsive === "mobile" ? (
				<div className="fixed -top-60 right-0 left-0 bottom-14.75 rounded-sm min-h-1/2 bg-(--color-darkest)/80 backdrop-blur-3xl backdrop:blur-2xl z-20">
					NavModal
				</div>
			) : (
				<div className="fixed top-12 right-0 left-0 bottom-[20%] mx-[20%] mb-[5%] rounded-sm min-h-100 bg-(--color-darkest)/80 backdrop-blur-3xl backdrop:blur-2xl z-50">
					NavModal
				</div>
			)}
		</>
	);
}

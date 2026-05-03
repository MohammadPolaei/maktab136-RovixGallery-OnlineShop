import { StatCardProps } from "@/components/dashboard/types";

export default function StatCard({
	icon,
	title,
	value,
	increasePercent,
	increaseText,
}: StatCardProps) {
	return (
		<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 hover:shadow-lg hover:bg-(--color-accent-green)/20 transition-all duration-500 ease-in-out">
			<div className="flex items-center gap-3">
				<div className="bg-(--color-accent-green) p-3 rounded-full text-white">
					{icon}
				</div>
				<span className="font-medium text-[12px] text-gray-800">{title}</span>
			</div>

			<p className="text-2xl font-extrabold text-gray-900">{value}</p>

			<p className="text-green-600 text-xs flex items-center gap-1">
				<svg
					width="12"
					height="12"
					viewBox="0 0 24 24"
					strokeWidth="3"
					className="stroke-current"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M5 15l7-7 7 7"
					/>
				</svg>
				{increasePercent}% {increaseText}
			</p>
		</div>
	);
}

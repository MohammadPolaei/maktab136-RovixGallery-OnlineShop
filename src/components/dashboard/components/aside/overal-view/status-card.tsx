import React from "react";

interface StatCardProps {
	icon: React.ReactNode;
	title: string;
	value: string | number;
	increasePercent: number;
	increaseText: string;
}

export default function StatCard({
	icon,
	title,
	value,
	increasePercent,
	increaseText,
}: StatCardProps) {
	return (
		<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition">
			<div className="flex items-center gap-3">
				<div className="bg-green-900 p-3 rounded-full text-gold">{icon}</div>
				<span className="font-medium text-gray-800">{title}</span>
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

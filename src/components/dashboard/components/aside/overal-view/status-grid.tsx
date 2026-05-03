"use client";

import { StatusCardDataType } from "@/components/dashboard/types";
import StatCard from "./status-card";

const stats: StatusCardDataType[] = [
	{
		title: "فروش کل",
		value: "12,450,000,000 تومان",
		increasePercent: 12.5,
		increaseText: "افزایش نسبت به ماه قبل",
		icon: (
			<svg
				className="w-5 h-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M3 3v18h18" />
				<path d="M7 14l4-4 3 3 6-8" />
			</svg>
		),
	},
	{
		title: "تعداد سفارش‌ها",
		value: "1,248",
		increasePercent: 8.2,
		increaseText: "افزایش نسبت به ماه قبل",
		icon: (
			<svg
				className="w-5 h-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" />
				<path d="M3 7l9 4 9-4" />
				<path d="M12 11v10" />
			</svg>
		),
	},
	{
		title: "محصولات فعال",
		value: "365",
		increasePercent: 5.3,
		increaseText: "افزایش نسبت به ماه قبل",
		icon: (
			<svg
				className="w-5 h-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="9" />
				<path d="M9 12l2 2 4-4" />
			</svg>
		),
	},
	{
		title: "کاربران",
		value: "2,340",
		increasePercent: 9.2,
		increaseText: "افزایش نسبت به ماه قبل",
		icon: (
			<svg
				className="w-5 h-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="9" cy="7" r="4" />
				<circle cx="17" cy="13" r="4" />
				<path d="M3 21c1-4 4-6 6-6" />
				<path d="M13 21c1-4 4-6 6-6" />
			</svg>
		),
	},
];

export default function StatsGrid() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
			{stats.map((item) => (
				<StatCard key={item.title} {...item} />
			))}
		</div>
	);
}

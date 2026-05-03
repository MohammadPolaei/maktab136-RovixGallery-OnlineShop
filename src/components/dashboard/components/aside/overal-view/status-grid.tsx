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
			>
				<path d="M3 3v18h18" />
				<path d="M3 9l7 7 7-14 4 4" />
			</svg>
		),
	},
	{
		title: "تعداد سفارش‌ها",
		value: "1,248",
		increasePercent: 8.2,
		increaseText: "افزایش نسبت به ماه قبل",
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor">
				<path d="M3 3h18v18H3z" />
				<path d="M16 5v14M9 9l3-3 3 3" />
			</svg>
		),
	},
	{
		title: "محصولات فعال",
		value: "365",
		increasePercent: 5.3,
		increaseText: "افزایش نسبت به ماه قبل",
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor">
				<circle cx="12" cy="12" r="10" />
				<path d="M12 6v6l4 2" />
			</svg>
		),
	},
	{
		title: "کاربران",
		value: "2,340",
		increasePercent: 9.2,
		increaseText: "افزایش نسبت به ماه قبل",
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor">
				<circle cx="12" cy="7" r="4" />
				<path d="M5.5 21h13a4 4 0 00-13 0z" />
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

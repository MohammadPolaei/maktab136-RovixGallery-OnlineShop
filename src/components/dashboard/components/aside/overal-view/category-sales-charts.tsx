"use client";

import { CategorySales } from "@/components/dashboard/types";
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

type Props = {
	data: CategorySales[];
};

const COLORS = ["#1e5142", "#3f6244", "#607346", "#817248", "#9c804c"];

export default function CategorySalesChart({ data }: Props) {
	return (
		<div className="flex-1 w-full h-84 rounded-xl md:shadow md:bg-white text-[12px]">
			<ResponsiveContainer>
				<PieChart>
					<Pie
						className="outline-0"
						data={data}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={100}
						paddingAngle={3}
					>
						{data.map((_, index) => (
							<Cell key={index} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>

					<Tooltip />
					<Legend />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}

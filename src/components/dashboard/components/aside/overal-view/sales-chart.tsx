"use client";

import { sales } from "@/components/dashboard/constants";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

export default function SalesChart() {
	return (
		<div className="bg-white rounded-sm shadow shadow-black/5 p-5 flex-1">
			<div className="flex justify-between mb-4">
				<h3 className="font-bold text-gray-900">تحلیل فروش</h3>

				<select className="shadow shadow-black/5 outline-0 rounded-sm px-2 py-1 text-sm">
					<option>۳۰ روز گذشته</option>
					<option>۷ روز گذشته</option>
				</select>
			</div>

			<ResponsiveContainer className="text-[12px]" width="100%" height={250}>
				<AreaChart data={sales}>
					<defs>
						<linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="10%" stopColor="#7A933F" stopOpacity={0.4} />
							<stop offset="100%" stopColor="#7A933F" stopOpacity={0.1} />
						</linearGradient>
					</defs>

					<XAxis dataKey="date" axisLine={false} tickLine={false} />
					<YAxis
						axisLine={false}
						tickLine={false}
						tickFormatter={(v) => v / 1_000_000 + "M"}
					/>
					<CartesianGrid vertical={false} stroke="#eee" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="value"
						stroke="#7A933F"
						fill="url(#salesGradient)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}

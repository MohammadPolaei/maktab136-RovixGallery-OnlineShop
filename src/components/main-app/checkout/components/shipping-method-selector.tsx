"use client";
import { useState } from "react";

type ShippingMethod = "post" | "tipax" | "courier" | "pickup";

const methods: {
	value: ShippingMethod;
	title: string;
	description: string;
	price: string;
}[] = [
	{
		value: "post",
		title: "پست پیشتاز",
		description: "تحویل 2 تا 4 روز کاری",
		price: "60,000 تومان",
	},
	{
		value: "tipax",
		title: "تیپاکس",
		description: "تحویل 1 تا 2 روز کاری",
		price: "95,000 تومان",
	},
	{
		value: "courier",
		title: "پیک موتوری",
		description: "فقط برای تهران، همان روز",
		price: "120,000 تومان",
	},
	{
		value: "pickup",
		title: "تحویل حضوری",
		description: "تحویل از فروشگاه",
		price: "رایگان",
	},
];

export default function ShippingMethodSelector() {
	const [selected, setSelected] = useState<ShippingMethod>("post");

	return (
		<div className="rounded-sm border border-gray-200 bg-white p-5">
			<h2 className="mb-4 text-lg font-semibold">روش ارسال</h2>

			<div className="space-y-3">
				{methods.map((method) => {
					const active = selected === method.value;

					return (
						<button
							key={method.value}
							type="button"
							onClick={() => setSelected(method.value)}
							className={`w-full rounded-sm border p-4 text-right transition
                ${
									active
										? "border-black bg-gray-50"
										: "border-gray-200 bg-white"
								}
              `}
						>
							<div className="flex items-start justify-between gap-4">
								<div>
									<div className="font-medium">{method.title}</div>
									<div className="mt-1 text-sm text-gray-500">
										{method.description}
									</div>
								</div>
								<div className="text-sm font-semibold text-gray-900">
									{method.price}
								</div>
							</div>
						</button>
					);
				})}
			</div>
		</div>
	);
}

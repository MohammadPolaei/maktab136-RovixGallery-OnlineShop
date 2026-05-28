"use client";
import { faNumber } from "@/utils/convert-number-into-persian";
import { useCheckout } from "../utils/checkout-context";

export default function ShippingMethodSelector() {
	const { methods, setShippingMethod, shippingMethod } = useCheckout();

	return (
		<div className="rounded-sm border border-gray-200 bg-white p-5">
			<h2 className="mb-4 text-lg font-semibold">روش ارسال</h2>

			<div className="space-y-3">
				{methods.map((method) => {
					const active = shippingMethod === method.value;

					return (
						<button
							key={method.value}
							type="button"
							onClick={() => setShippingMethod(method.value)}
							className={`w-full rounded-sm border p-4 text-right transition
                ${
									active
										? "border-black bg-gray-50"
										: "border-gray-200 bg-white"
								}
              `}
						>
							<div className="flex items-center justify-between gap-4">
								<div>
									<div className="font-medium">{method.title}</div>
									<div className="mt-1 text-sm text-gray-500">
										{method.description}
									</div>
								</div>
								<div className="text-sm font-semibold text-gray-900">
									{Number(method.price) == 0
										? "رایگان"
										: `${faNumber(method.price)}
								 ریال`}
								</div>
							</div>
						</button>
					);
				})}
			</div>
		</div>
	);
}

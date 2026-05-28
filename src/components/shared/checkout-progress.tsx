"use client";

import { usePathname } from "next/navigation";

const steps = ["سبد خرید", "اطلاعات ارسال", "پرداخت"];

export default function CheckoutProgress() {
	const pathname = usePathname();

	return (
		<div className="flex flex-wrap items-center gap-1 text-sm">
			{steps.map((step, index) => {
				let currentStep = 0;
				pathname.includes("/checkout/payment?")
					? (currentStep = 4)
					: pathname.includes("/payment")
					? (currentStep = 3)
					: pathname.includes("/checkout")
					? (currentStep = 2)
					: pathname.includes("/cart")
					? (currentStep = 1)
					: null;
				const stepNumber = index + 1;
				const active = stepNumber === currentStep;
				const done = stepNumber < currentStep;

				return (
					<div key={step} className="flex items-center gap-3">
						<div
							className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-bold
                ${done ? "bg-green-600 text-white border-green-600" : ""}
                ${active ? "bg-black text-white border-black" : ""}
                ${
									!active && !done
										? "bg-white text-gray-400 border-gray-300"
										: ""
								}
              `}
						>
							{stepNumber}
						</div>
						<span
							className={`${
								active ? "font-semibold text-black" : "text-gray-500"
							}`}
						>
							{step}
						</span>
						{stepNumber !== steps.length && (
							<div className="h-px w-6 bg-gray-200" />
						)}
					</div>
				);
			})}
		</div>
	);
}

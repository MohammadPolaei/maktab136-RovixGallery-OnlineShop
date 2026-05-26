type Props = {
	currentStep: number;
};

const steps = ["سبد خرید", "اطلاعات ارسال", "پرداخت", "تایید نهایی"];

export default function CheckoutProgress({ currentStep }: Props) {
	return (
		<div className="flex flex-wrap items-center gap-3 text-sm">
			{steps.map((step, index) => {
				const stepNumber = index + 1;
				const active = stepNumber === currentStep;
				const done = stepNumber < currentStep;

				return (
					<div key={step} className="flex items-center gap-3">
						<div
							className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold
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

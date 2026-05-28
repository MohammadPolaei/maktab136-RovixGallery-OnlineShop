import React from "react";

type Props = {
	loading?: boolean;
	disabled?: boolean;
	onClick: () => void;
};

const PaymentButton: React.FC<Props> = ({ loading, disabled, onClick }) => {
	const isDisabled = !!loading || !!disabled;

	return (
		<button
			type="button"
			onClick={onClick}
			disabled={isDisabled}
			className={[
				"mt-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white transition",
				isDisabled
					? "cursor-not-allowed bg-slate-400"
					: "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200",
			].join(" ")}
		>
			{loading ? "در حال پردازش..." : "تأیید و پرداخت"}
		</button>
	);
};

export default PaymentButton;

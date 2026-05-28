import React from "react";
import { PaymentStatus as StatusType } from "../types";

type Props = {
	status: StatusType;
	message?: string;
};

const PaymentStatusView: React.FC<Props> = ({ status, message }) => {
	if (status === "idle") return null;

	const ui =
		status === "processing"
			? {
					box: "border-blue-200 bg-blue-50 text-blue-700",
					title: "در حال پردازش...",
			  }
			: status === "success"
			? {
					box: "border-emerald-200 bg-emerald-50 text-emerald-700",
					title: "پرداخت موفق",
			  }
			: {
					box: "border-red-200 bg-red-50 text-red-700",
					title: "پرداخت ناموفق",
			  };

	return (
		<div className={`mt-4 rounded-xl border p-3 text-sm ${ui.box}`}>
			<p className="font-semibold">{ui.title}</p>
			{message && <p className="mt-1">{message}</p>}
		</div>
	);
};

export default PaymentStatusView;

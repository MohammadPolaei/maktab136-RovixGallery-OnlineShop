import React from "react";

type Props = {
	merchantName: string;
	orderId: string;
	amount: number;
};

const PaymentSummary: React.FC<Props> = ({ merchantName, orderId, amount }) => {
	return (
		<div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
			<h2 className="mb-3 text-base font-semibold text-slate-900">
				اطلاعات پرداخت
			</h2>

			<div className="space-y-2 text-sm text-slate-700">
				<div className="flex items-center justify-between">
					<span className="text-slate-500">پذیرنده</span>
					<span className="font-medium text-slate-900">{merchantName}</span>
				</div>

				<div className="flex items-center justify-between">
					<span className="text-slate-500">شماره سفارش</span>
					<span className="font-medium text-slate-900">{orderId}</span>
				</div>

				<div className="flex items-center justify-between">
					<span className="text-slate-500">مبلغ</span>
					<span className="font-semibold text-slate-900">
						{amount.toLocaleString("fa-IR")} تومان
					</span>
				</div>
			</div>
		</div>
	);
};

export default PaymentSummary;

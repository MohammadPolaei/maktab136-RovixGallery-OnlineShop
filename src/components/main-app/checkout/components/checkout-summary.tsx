export default function CheckoutSummary() {
	const items = [
		{ name: "ساعت مچی مدل X", qty: 1, price: 12500000 },
		{ name: "بند چرمی", qty: 1, price: 850000 },
	];

	const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
	const shipping = 60000;
	const total = subtotal + shipping;

	return (
		<div className="rounded-sm border border-gray-200 bg-white p-5">
			<h2 className="mb-4 text-lg font-semibold">خلاصه سفارش</h2>

			<div className="space-y-3">
				{items.map((item, index) => (
					<div
						key={index}
						className="flex items-center justify-between text-sm"
					>
						<span className="text-gray-700">
							{item.name} × {item.qty}
						</span>
						<span className="font-medium">
							{item.price.toLocaleString()} تومان
						</span>
					</div>
				))}
			</div>

			<div className="my-4 border-t pt-4 space-y-2 text-sm">
				<Row label="جمع کالاها" value={`${subtotal.toLocaleString()} تومان`} />
				<Row label="هزینه ارسال" value={`${shipping.toLocaleString()} تومان`} />
				<Row
					label="مبلغ قابل پرداخت"
					value={`${total.toLocaleString()} تومان`}
					bold
				/>
			</div>
		</div>
	);
}

function Row({
	label,
	value,
	bold = false,
}: {
	label: string;
	value: string;
	bold?: boolean;
}) {
	return (
		<div
			className={`flex items-center justify-between ${
				bold ? "text-base font-semibold" : ""
			}`}
		>
			<span className="text-gray-600">{label}</span>
			<span>{value}</span>
		</div>
	);
}

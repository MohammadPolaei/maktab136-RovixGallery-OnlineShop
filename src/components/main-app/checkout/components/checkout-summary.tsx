import { faNumber } from "@/utils/convert-number-into-persian";
import { GetCartResponse } from "../../cart/types";
import { useCheckout } from "../utils/checkout-context";

export default function CheckoutSummary({
	cart,
}: {
	cart: GetCartResponse | undefined;
}) {
	const { shippingMethod, methods } = useCheckout();

	const currentMethod = methods.filter((m) => m.value == shippingMethod);
	const totalPrice = cart?.data.totalPrice;

	return (
		<div className="rounded-sm border border-gray-200 bg-white p-5">
			<h2 className="mb-4 text-lg font-semibold">خلاصه سفارش</h2>

			<div className="space-y-3">
				{cart?.data.items.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-start justify-between text-sm pt-3 border-t border-t-black/20"
					>
						<span className="text-gray-700">
							{item.product.name} × {item.quantity}
						</span>
						<span className="font-medium">{faNumber(item.price)} ریال</span>
					</div>
				))}
			</div>

			<div className="my-4 border-t pt-4 space-y-2 text-sm">
				<Row label="جمع کالاها" value={faNumber(Number(totalPrice))} />
				<Row
					label="هزینه ارسال"
					value={`${faNumber(currentMethod[0].price)} ریال`}
				/>
				<Row
					label="مبلغ قابل پرداخت"
					value={`${faNumber(
						Number(totalPrice) + Number(currentMethod[0].price)
					)} ریال`}
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

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
		<div className="rounded-sm border border-gray-200 bg-white p-5 flex flex-col justify-start items-start gap-3 h-full">
			<h2 className="mb-4 text-lg font-semibold flex-1 w-full">خلاصه سفارش</h2>

			<div className="space-y-3 max-h-[30vh] w-full overflow-y-auto rounded-sm border border-black/10 bg-black/5">
				{cart?.data.items.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-start justify-between text-sm py-3 border-y border-y-black/20 px-3 bg-black/10"
					>
						<span className="text-gray-700">
							{item.product.name} × {faNumber(item.quantity)}
						</span>
						<span className="font-medium">{faNumber(item.price)} ریال</span>
					</div>
				))}
			</div>

			<div className="my-4 border-t pt-4 space-y-2 text-sm flex-1 w-full">
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

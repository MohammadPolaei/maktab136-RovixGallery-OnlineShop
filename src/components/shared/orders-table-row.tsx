import { Order, ShippingMethod } from "@/types/orders-type";
import { faNumber } from "@/utils/convert-number-into-persian";
import { formatCartDate } from "@/utils/format-date-persian";
import { statusToPersian } from "@/utils/status-to-persian";
import Link from "next/link";

export default function OrdersTableRow({
	order,
	showType,
}: {
	order: Order;
	showType: "admin" | "user";
}) {
	const deliverToPersian = (delivery: ShippingMethod) => {
		switch (delivery) {
			case "post":
				return "پست";
			case "tipax":
				return "تیپاکس";
			case "courier":
				return "پیک موتوری";
			case "pickup":
				return "تحویل حضوری";
			default:
				return "نامشخص";
		}
	};

	const statusInfo = statusToPersian(order.status);

	return (
		<>
			<tr className="border-b border-black/10 transition hover:bg-gray-50">
				<td className="p-3 font-medium">{order._id}</td>
				<td className="p-3">{order.shippingAddress.name}</td>

				<td className="p-3">{formatCartDate(order.createdAt)}</td>
				<td className="p-3">{formatCartDate(order.updatedAt)}</td>
				<td className="p-3">{`${faNumber(order.totalPrice)} ریال`}</td>

				<td className="p-3">{deliverToPersian(order.paymentMethod)}</td>

				<td className={`p-3 ${statusInfo.color}`}>{statusInfo.text}</td>

				<td className="p-3 cursor-pointer transition-all duration-500 ease-in-out hover:bg-(--color-accent-green) hover:text-white">
					<Link
						href={`orders/${order._id}`}
						className="inline-block cursor-pointer rounded px-3 py-1 transition-all duration-300 hover:bg-var(--color-accent-green) hover:text-white"
					>
						جزئیات
					</Link>
				</td>
			</tr>
		</>
	);
}

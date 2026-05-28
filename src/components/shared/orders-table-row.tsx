import { Order, OrderStatus, ShippingMethod } from "@/types/orders-type";
import { faNumber } from "@/utils/convert-number-into-persian";
import { formatCartDate } from "@/utils/format-date-persian";
import Link from "next/link";

export default function OrdersTableRow({
	order,
	showType,
}: {
	order: Order;
	showType: "admin" | "user";
}) {
	const statusToPersian = (status: OrderStatus) => {
		switch (status) {
			case "cancelled":
				return { text: "لغو شده", color: "bg-red-100" };
			case "confirmed":
				return { text: "تائید شده", color: "bg-blue-100" };
			case "pending":
				return { text: "در حال پردازش", color: "bg-yellow-100" };
			case "shipping":
				return { text: "در حال ارسال", color: "bg-green-100" };
			case "delivered":
				return { text: "تحویل داده شده", color: "bg-green-700/50" };
			default:
				return { text: "نامشخص", color: "" };
		}
	};

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

import { Order, OrderStatus, ShippingMethod } from "@/types/orders-type";
import { faNumber } from "@/utils/convert-number-into-persian";
import { formatCartDate } from "@/utils/format-date-persian";

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
				return {
					text: "لغو شده",
					color: "bg-red-100",
				};

			case "confirmed":
				return {
					text: "تائید شده",
					color: "bg-blue-100",
				};
			case "pending":
				return {
					text: "در حال پردازش",
					color: "bg-yellow-100",
				};
			case "shipping":
				return {
					text: "در حال ارسال",
					color: "bg-green-100",
				};

			case "delivered":
				return {
					text: "تحویل داده شده",
					color: "bg-green-700/50",
				};

			default:
				return {
					text: "نامشخص",
					color: "",
				};
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
		<tr className="border-b border-black/10 hover:bg-gray-50 transition">
			<td className="p-3 font-medium">{order._id}</td>
			{showType == "admin" ? (
				<td className="p-3">{`${order.shippingAddress.name}`}</td>
			) : (
				<td className="p-3">{`${order.shippingAddress.name}`}</td>
			)}

			<td className="p-3">{formatCartDate(order.createdAt)}</td>
			<td className="p-3">{formatCartDate(order.updatedAt)}</td>
			<td className="p-3">{`${faNumber(order.totalPrice)} ریال`}</td>
			<td className="p-3">{deliverToPersian(order.paymentMethod)}</td>
			<td className={`p-3 ${statusInfo?.color}`}>{statusInfo?.text}</td>
			<td className="p-3 cursor-pointer hover:bg-(--color-accent-green) hover:text-white transition-all duration-500 ease-in-out">
				جزئیات
			</td>

			{/* <td className="p-3 w-50">
				
				<OrdersChangeState order={order} />
				
				</td> */}
		</tr>
	);
}

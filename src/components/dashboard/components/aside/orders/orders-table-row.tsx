import { OrderType } from "@/components/dashboard/types";
import OrdersChangeState from "./orders-change-state";

export default function OrdersTableRow({ order }: { order: OrderType }) {
	return (
		<tr className="border-b border-black/10 hover:bg-gray-50 transition">
			<td className="p-3 font-medium">{order._id}</td>

			<td className="p-3">{order.userName}</td>

			<td className="p-3">{order.createdAt}</td>

			<td className="p-3 text-(--color-accent-green) font-bold">
				{order.totalPrice.toLocaleString()} ریال
			</td>

			<td className="p-3 w-50">
				<OrdersChangeState order={order} />
			</td>
		</tr>
	);
}

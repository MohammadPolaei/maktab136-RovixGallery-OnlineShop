import { OrderType } from "@/components/dashboard/types";

export default function OrdersTableRow({ order }: { order: OrderType }) {
	return (
		<tr className="border-b hover:bg-gray-50 transition">
			<td className="p-3 font-medium">{order._id}</td>

			<td className="p-3">{order.userName}</td>

			<td className="p-3">{order.createdAt}</td>

			<td className="p-3 text-(--color-accent-green) font-bold">
				{order.totalPrice.toLocaleString()} تومان
			</td>

			<td className="p-3">
				<span
					className={`px-3 py-1 rounded text-xs font-medium
          ${
						order.isDelivered
							? "bg-green-200 text-green-800"
							: "bg-red-200 text-red-800"
					}`}
				>
					{order.isDelivered ? "تحویل داده شده" : "تحویل داده نشده"}
				</span>
			</td>
		</tr>
	);
}

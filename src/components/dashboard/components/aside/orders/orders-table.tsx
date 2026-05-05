"use client";

import { ordersMock } from "@/components/dashboard/constants";
import OrdersTableRow from "./orders-table-row";
type Props = {
	filter?: "all" | "delivered" | "notDelivered";
	setFilter?: (filter: "all" | "delivered" | "notDelivered") => void;
};
export default function OrdersTable({ filter, setFilter }: Props) {
	return (
		<div className="bg-white rounded-lg overflow-x-auto">
			<table className="w-full text-[12px] text-center min-w-300">
				<thead className="bg-(--color-dark-green) text-(--color-bg) text-center">
					<tr>
						<th className="p-3">شناسه سفارش</th>
						<th className="p-3">نام کاربر</th>
						<th className="p-3">تاریخ ثبت</th>
						<th className="p-3">مبلغ کل</th>
						<th className="p-3">وضعیت</th>
					</tr>
				</thead>

				<tbody>
					{filter
						? filter === "all"
							? ordersMock.map((order) => (
									<OrdersTableRow key={order._id} order={order} />
							  ))
							: ordersMock
									.filter((order) =>
										filter === "delivered"
											? order.isDelivered == true
											: order.isDelivered == false
									)
									.map((order) => (
										<OrdersTableRow key={order._id} order={order} />
									))
						: ordersMock.map((order) => (
								<OrdersTableRow key={order._id} order={order} />
						  ))}
				</tbody>
			</table>
		</div>
	);
}

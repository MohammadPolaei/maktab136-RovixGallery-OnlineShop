"use client";

import { OrdersListResponse } from "@/types/orders-type";
import OrdersTableRow from "./orders-table-row";

export default function OrdersTable({
	orders,
}: {
	orders: OrdersListResponse;
}) {
	return (
		<div className="bg-white rounded-sm overflow-x-auto">
			<table className="w-full text-[12px] text-center min-w-300">
				<thead className="bg-(--color-dark-green) text-(--color-bg) text-center">
					<tr>
						<th className="p-3">شناسه سفارش</th>
						<th className="p-3">نام کاربر</th>
						<th className="p-3">تاریخ ثبت</th>
						<th className="p-3">تاریخ تغییر وضعیت</th>
						<th className="p-3">مبلغ کل</th>
						<th className="p-3">روش ارسال</th>
						<th className="p-3">وضعیت</th>
						<th className="p-3">جزئیات سفارش</th>
					</tr>
				</thead>

				<tbody>
					{orders?.data.map((order, index) => {
						return (
							<OrdersTableRow
								showType="user"
								key={order._id}
								order={orders.data[index]}
							/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

"use client";
import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import OrdersTable from "@/components/shared/orders-table";
import { useOrders } from "@/utils/orders-context";

export default function page() {
	const { orders } = useOrders();

	return (
		<div className="w-full flex flex-col justify-start items-start overflow-auto">
			{orders ? (
				orders.count == 0 ? (
					<div className="w-full h-[60vh] flex flex-col justify-center items-center">
						{"سفارشی برای شما ثبت نشده"}
					</div>
				) : (
					<OrdersTable showType="user" orders={orders} />
				)
			) : (
				<div className="w-full h-[60vh] flex flex-col justify-center items-center">
					<RovixLuxuryLoader />
				</div>
			)}
		</div>
	);
}

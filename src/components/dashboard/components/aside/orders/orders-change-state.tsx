import { OrderType } from "@/components/dashboard/types/dashboard-order-types";
import { useState } from "react";

export default function OrdersChangeState({ order }: { order: OrderType }) {
	const [deliveredState, setDeliveredState] = useState(order.isDelivered);
	return (
		<button
			onClick={() => setDeliveredState(!deliveredState)}
			className={`px-3 py-1 rounded-sm text-xs font-medium cursor-pointer 
          ${
						deliveredState
							? "bg-green-200 text-green-800"
							: "bg-red-200 text-red-800"
					}`}
		>
			{deliveredState ? "تحویل داده شده" : "تحویل داده نشده"}
		</button>
	);
}

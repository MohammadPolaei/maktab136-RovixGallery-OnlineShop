import { OrderStatus } from "@/types/orders-type";

export const statusToPersian = (status: OrderStatus) => {
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

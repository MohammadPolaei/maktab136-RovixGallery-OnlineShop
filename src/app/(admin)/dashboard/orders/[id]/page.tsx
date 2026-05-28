"use client";

import { useOrderStatusChange } from "@/components/dashboard/hooks/use-order-status-change";
import DashboardHeadingContainer from "@/components/shared/dashboard-heading-container";
import { useGetSingleOrder } from "@/hooks/use-get-single-order";
import { OrderStatus, ShippingMethod } from "@/types/orders-type";
import { faNumber, faNumberSimple } from "@/utils/convert-number-into-persian";
import { formatCartDate } from "@/utils/format-date-persian";
import { useParams } from "next/navigation";

export default function OrderDetailPage() {
	const params = useParams<{ id: string }>();
	const id = params.id;

	const { singleOrder, isLoading, error } = useGetSingleOrder(id);
	const { updateOrder, updateOrderError, updateOrderPending } =
		useOrderStatusChange();

	if (isLoading) {
		return <div className="p-6">در حال دریافت...</div>;
	}

	if (error) {
		return (
			<div className="p-6 text-red-600">
				خطا در دریافت اطلاعات:{" "}
				{error instanceof Error ? error.message : "unknown error"}
			</div>
		);
	}

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

	const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newStatus = e.target.value as OrderStatus;
		updateOrder({ id, data: newStatus });
	};

	const statusBgColor = statusToPersian(singleOrder!.data.status).color;

	return (
		<div className="p-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
			<div className="w-full rounded-sm bg-white mt-5 shadow shadow-black/5 p-5">
				<DashboardHeadingContainer flexClass="flex-col md:flex-row">
					جزئیات سفارش
				</DashboardHeadingContainer>

				<div className="w-full grid grid-cols-1 gap-2 text-[10px] md:text-[12px] rounded-sm py-3 lg:px-10">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">{"شناسه کاربری"}</span>
						<span className="text-(--color-accent-green)">
							{singleOrder?.data._id}
						</span>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">{"تاریخ ثبت سفارش"}</span>
						<span className="text-(--color-accent-green)">
							{formatCartDate(singleOrder!.data.createdAt)}
						</span>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">{"آخرین وضعیت ویرایش"}</span>
						<span className="text-(--color-accent-green)">
							{formatCartDate(singleOrder!.data.updatedAt)}
						</span>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">{"روش ارسال"}</span>
						<span className="text-(--color-accent-green)">
							{deliverToPersian(singleOrder!.data.paymentMethod)}
						</span>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">{"وضعیت سفارش"}</span>

						<select
							className={`${statusBgColor} p-2 rounded-sm outline-0 cursor-pointer border-0 ${
								updateOrderPending ? "disabled:opacity-50" : ""
							}`}
							value={singleOrder!.data.status}
							onChange={handleStatusChange}
							disabled={updateOrderPending}
						>
							<option value="cancelled">{"لغو شده"}</option>
							<option value="confirmed">{"تائید شده"}</option>
							<option value="pending">{"در حال پردازش"}</option>
							<option value="shipping">{"در حال ارسال"}</option>
							<option value="delivered">{"تحویل داده شده"}</option>
						</select>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">{"مجموع قیمت"}</span>
						<span className="text-(--color-accent-green)">{`${faNumber(
							singleOrder!.data.totalPrice
						)} ریال`}</span>
					</div>
				</div>
			</div>
			<div className="rounded-sm bg-white mt-5 shadow shadow-black/5 p-5">
				<DashboardHeadingContainer flexClass="flex-col md:flex-row">
					محصولات
				</DashboardHeadingContainer>

				<div className="w-full flex flex-col justify-start items-start gap-5 overflow-auto">
					<div className="w-full  min-w-80 grid grid-cols-[3fr_2fr_1fr] gap-3 lg:px-10 text-[10px] md:text-[12px] bg-black/10 p-3">
						<div>{"نام محصول"}</div>
						<div>{"قیمت"}</div>
						<div>{"تعداد"}</div>
					</div>
					{singleOrder!.data.orderItems.map((item) => (
						<div
							key={item._id}
							className="w-full  min-w-80 grid grid-cols-[3fr_2fr_1fr] gap-3 lg:px-10 text-[10px] md:text-[12px] text-(--color-accent-green)"
						>
							<div>{item.name}</div>
							<div>{`${faNumber(item.price)} ریال`}</div>
							<div>{faNumberSimple(item.quantity)}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

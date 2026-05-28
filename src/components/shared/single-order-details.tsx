"use client";

import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import { useGetSingleOrder } from "@/hooks/use-get-single-order";
import { OrderStatus, ShippingMethod } from "@/types/orders-type";
import { faNumber, faNumberSimple } from "@/utils/convert-number-into-persian";
import { formatCartDate } from "@/utils/format-date-persian";
import React from "react";
import DashboardHeadingContainer from "./dashboard-heading-container";

export default function SingleOrderDetails({
	id,
	usageType,
	updateOrderPending = false,
	handleStatusChange,
}: {
	id: string;
	usageType: "admin" | "user";
	updateOrderPending?: boolean;
	handleStatusChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
	const { singleOrder, isLoading, error } = useGetSingleOrder(id);

	if (isLoading) {
		return (
			<div className="p-6 flex flex-col justify-center items-center h-full">
				در حال دریافت...
				<RovixLuxuryLoader />
			</div>
		);
	}

	if (error) {
		return (
			<div className="p-6 text-red-600">
				خطا در دریافت اطلاعات:{" "}
				{error instanceof Error ? error.message : "unknown error"}
			</div>
		);
	}

	if (!singleOrder?.data) {
		return <div className="p-6 text-red-600">اطلاعات سفارش یافت نشد</div>;
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

	const statusBgColor = statusToPersian(singleOrder.data.status).color;

	return (
		<div className="p-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
			<div className="w-full rounded-sm bg-white mt-5 shadow shadow-black/5 p-5">
				<DashboardHeadingContainer flexClass="flex-col md:flex-row">
					جزئیات سفارش
				</DashboardHeadingContainer>

				<div className="w-full grid grid-cols-1 gap-2 text-[10px] md:text-[12px] rounded-sm py-3 lg:px-10">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">شناسه کاربری</span>
						<span className="text-(--color-accent-green)">
							{singleOrder.data._id}
						</span>
					</div>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">تاریخ ثبت سفارش</span>
						<span className="text-(--color-accent-green)">
							{formatCartDate(singleOrder.data.createdAt)}
						</span>
					</div>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">آخرین وضعیت ویرایش</span>
						<span className="text-(--color-accent-green)">
							{formatCartDate(singleOrder.data.updatedAt)}
						</span>
					</div>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">روش ارسال</span>
						<span className="text-(--color-accent-green)">
							{deliverToPersian(singleOrder.data.paymentMethod)}
						</span>
					</div>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">وضعیت سفارش</span>
						{usageType === "admin" ? (
							<select
								className={`${statusBgColor} p-2 rounded-sm outline-0 cursor-pointer border-0 ${
									updateOrderPending ? "opacity-50" : ""
								}`}
								value={singleOrder.data.status}
								onChange={handleStatusChange}
								disabled={updateOrderPending}
							>
								<option value="cancelled">لغو شده</option>
								<option value="confirmed">تائید شده</option>
								<option value="pending">در حال پردازش</option>
								<option value="shipping">در حال ارسال</option>
								<option value="delivered">تحویل داده شده</option>
							</select>
						) : (
							<span>{statusToPersian(singleOrder.data.status).text}</span>
						)}
					</div>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-3 border-y border-y-black/10 px-2">
						<span className="font-semibold">مجموع قیمت</span>
						<span className="text-(--color-accent-green)">{`${faNumber(
							singleOrder.data.totalPrice
						)} ریال`}</span>
					</div>
				</div>
			</div>

			<div className="rounded-sm bg-white mt-5 shadow shadow-black/5 p-5">
				<DashboardHeadingContainer flexClass="flex-col md:flex-row">
					محصولات
				</DashboardHeadingContainer>

				<div className="w-full flex flex-col justify-start items-start gap-5 overflow-auto">
					<div className="w-full min-w-80 grid grid-cols-[3fr_2fr_1fr] gap-3 lg:px-10 text-[10px] md:text-[12px] bg-black/10 p-3">
						<div>نام محصول</div>
						<div>قیمت</div>
						<div>تعداد</div>
					</div>

					{singleOrder.data.orderItems?.map((item: any) => (
						<div
							key={item._id}
							className="w-full min-w-80 grid grid-cols-[3fr_2fr_1fr] gap-3 lg:px-10 text-[10px] md:text-[12px] text-(--color-accent-green)"
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

"use client";

import DashboardHeadingContainer from "@/components/shared/dashboard-heading-container";
import { useGetSingleOrder } from "@/hooks/use-get-single-order";
import { OrderStatus, ShippingMethod } from "@/types/orders-type";
import { faNumber } from "@/utils/convert-number-into-persian";
import { formatCartDate } from "@/utils/format-date-persian";
import { useParams } from "next/navigation";

export default function OrderDetailPage() {
	const params = useParams<{ id: string }>();
	const id = params.id;

	const { singleOrder, isLoading, error } = useGetSingleOrder(id);

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
			case "pending":
				return { text: "در حال پردازش", color: "bg-yellow-100" };
			case "cancelled":
				return { text: "لغو شده", color: "bg-red-100" };
			case "confirmed":
				return { text: "تائید شده", color: "bg-blue-100" };
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

	return (
		<div className="p-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
			<div className="w-full rounded-sm bg-white mt-5 shadow shadow-black/5 p-5">
				<DashboardHeadingContainer flexClass="flex-col md:flex-row">
					جزئیات سفارش
				</DashboardHeadingContainer>

				<div className="w-full grid grid-cols-2 gap-2 rounded-sm py-3 lg:px-10">
					<div className="flex flex-col justify-start items-start gap-5 text-[10px] md:text-[12px]">
						<span>{"شناسه کاربری"}</span>
						<span>{"تاریخ ثبت سفارش"}</span>
						<span>{"آخرین وضعیت ویرایش"}</span>
						<span>{"روش ارسال"}</span>
						<span>{"وضعیت سفارش"}</span>
						<span>{"مجموع قیمت"}</span>
					</div>
					<div className="flex flex-col justify-start items-start gap-5 border-r border-r-black/10 pr-5 overflow-auto text-[10px] md:text-[12px]">
						<span>{singleOrder?.data._id}</span>
						<span>{formatCartDate(singleOrder!.data.createdAt)}</span>
						<span>{formatCartDate(singleOrder!.data.updatedAt)}</span>
						<span>{deliverToPersian(singleOrder!.data.paymentMethod)}</span>
						<span>{statusToPersian(singleOrder!.data.status).text}</span>
						<span>{`${faNumber(singleOrder!.data.totalPrice)} ریال`}</span>
					</div>
				</div>
			</div>
			<div className="rounded-sm bg-white mt-5 shadow shadow-black/5 p-5">
				<DashboardHeadingContainer flexClass="flex-col md:flex-row">
					محصولات
				</DashboardHeadingContainer>

				<div className="flex flex-col justify-start items-start gap-5">
					<div className="w-full grid grid-cols-[3fr_2fr_1fr] gap-3 lg:px-10 text-[10px] md:text-[12px] bg-black/10 p-3">
						<div>{"نام محصول"}</div>
						<div>{"قیمت"}</div>
						<div>{"تعداد"}</div>
					</div>
					{singleOrder!.data.orderItems.map((item) => (
						<div
							key={item._id}
							className="w-full grid grid-cols-[3fr_2fr_1fr] gap-3 lg:px-10 text-[10px] md:text-[12px]"
						>
							<div>{item.name}</div>
							<div>{`${faNumber(item.price)} ریال`}</div>
							<div>{faNumber(item.quantity)}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

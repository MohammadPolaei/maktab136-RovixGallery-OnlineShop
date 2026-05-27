"use client";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function FakePayment() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const rawData = searchParams.get("data");
	const payload = rawData ? JSON.parse(decodeURIComponent(rawData)) : null;

	const confirmPayment = async () => {
		if (!payload) return;

		try {
			const res = await axios.post("/api/orders", payload);

			if (res.data.success) {
				toast.success("پرداخت موفقیت‌آمیز بود و سفارش ثبت شد");
				// router.push("/profile/orders");
			}
		} catch (error: any) {
			toast.error("خطا در ثبت نهایی سفارش");
		}
	};

	if (!payload) return <div>خطا: اطلاعات پرداخت یافت نشد.</div>;

	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-6">
			<h1 className="text-2xl font-bold">درگاه پرداخت شبیه‌سازی شده</h1>

			<div className="bg-gray-100 p-4 rounded-md">
				<p>
					مبلغ قابل پرداخت: <span className="font-bold">... تومان</span>
				</p>
				<p>ارسال به: {payload.shippingAddress.address}</p>
			</div>

			<button
				onClick={confirmPayment}
				className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
			>
				پرداخت موفقیت‌آمیز (تست)
			</button>
		</div>
	);
}

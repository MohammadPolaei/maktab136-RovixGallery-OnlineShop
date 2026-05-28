"use client";
import PaymentPage from "@/components/main-app/payment/components/payment-page";
import { addOrder } from "@/services/orders";
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
			const res = await addOrder(payload);
			console.log(res);
			if (res.success) {
				toast.success("پرداخت موفقیت‌آمیز بود و سفارش ثبت شد");
				router.replace("/user-profile/orders");
			}
		} catch (error: any) {
			toast.error("خطا در ثبت نهایی سفارش");
		}
	};

	if (!payload) return <div>خطا: اطلاعات پرداخت یافت نشد.</div>;

	return (
		<div className="w-full">
			<PaymentPage confirmPay={confirmPayment} />
		</div>
	);
}

"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCheckout } from "../utils/checkout-context";
import { User } from "./checkout-layout";

export type PaymentPayload = {
	shippingAddress: {
		name: string;
		phone: string;
		address: string;
		postalCode: string;
	};
	paymentMethod: string;
	shippingMethod: string;
};

export default function CheckoutActions({ userData }: { userData: User }) {
	const { addressData, shippingMethod } = useCheckout();
	const router = useRouter();

	const handlePayment = async () => {
		if (!addressData?.address || !addressData?.city) {
			toast.error("لطفا آدرس و مشخصات را کامل وارد کنید");
			return;
		}

		try {
			const payload = {
				shippingAddress: {
					name: userData.name || "نام پیش‌فرض",
					phone: userData.phone || "۰۹۱۲...",
					address: `${addressData.province}, ${addressData.city}, ${addressData.address}`,
					postalCode: addressData.postalCode,
				},
				paymentMethod: "online",
				shippingMethod: shippingMethod,
			};

			const stringifiedPayload = encodeURIComponent(JSON.stringify(payload));

			router.push(`checkout/payment?data=${stringifiedPayload}`);
		} catch (error: any) {
			toast.error(error.response?.data?.message || "خطا در ثبت سفارش");
		}
	};

	return (
		<div className="rounded-sm border border-gray-200 bg-white p-5">
			<button
				onClick={handlePayment}
				type="button"
				className="w-full rounded-sm bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
			>
				تایید و پرداخت آنلاین
			</button>
		</div>
	);
}

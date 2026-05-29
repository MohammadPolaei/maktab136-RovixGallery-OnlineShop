"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "../../cart/hooks/use-cart-CRUD";
import { PaymentFormData, PaymentStatus, ValidationErrors } from "../types";
import CardForm from "./card-form";
import PaymentButton from "./payment-button";
import PaymentStatusView from "./payment-status";
import PaymentSummary from "./payment-summary";

const initialForm: PaymentFormData = {
	cardNumber: "",
	cardHolder: "",
	expiryMonth: "",
	expiryYear: "",
	cvv: "",
};

const PaymentPage = ({ confirmPay }: { confirmPay: any }) => {
	const [formData, setFormData] = useState<PaymentFormData>(initialForm);
	const [errors, setErrors] = useState<ValidationErrors>({});
	const [status, setStatus] = useState<PaymentStatus>("idle");
	const [message, setMessage] = useState<string>("");

	const router = useRouter();
	const { refetch } = useCartStore();

	const handleChange = (name: string, value: string) => {
		if (name === "cardNumber") {
			const digits = value.replace(/\D/g, "").slice(0, 16);
			setFormData((p) => ({ ...p, cardNumber: digits }));
			return;
		}

		if (name === "cvv") {
			const digits = value.replace(/\D/g, "").slice(0, 4);
			setFormData((p) => ({ ...p, cvv: digits }));
			return;
		}

		setFormData((p) => ({ ...p, [name]: value }));
	};

	const validate = (): ValidationErrors => {
		const e: ValidationErrors = {};

		if (!formData.cardNumber) e.cardNumber = "شماره کارت الزامی است";
		else if (formData.cardNumber.length !== 16)
			e.cardNumber = "16 رقم وارد کنید";

		if (!formData.cardHolder.trim())
			e.cardHolder = "نام دارنده کارت الزامی است";

		if (!formData.expiryMonth) e.expiryMonth = "ماه را انتخاب کنید";
		if (!formData.expiryYear) e.expiryYear = "سال را انتخاب کنید";

		if (!formData.cvv) e.cvv = "CVV2 الزامی است";
		else if (formData.cvv.length < 3) e.cvv = "حداقل 3 رقم";

		return e;
	};

	const handlePay = async () => {
		const e = validate();
		setErrors(e);

		if (Object.keys(e).length > 0) {
			setStatus("error");
			setMessage("لطفاً اطلاعات را کامل و صحیح وارد کنید.");
			return;
		}

		setStatus("processing");
		setMessage("");

		await new Promise((r) => setTimeout(r, 1200));

		setStatus("success");
		setMessage("پرداخت به صورت نمایشی با موفقیت انجام شد.");

		await new Promise((r) => setTimeout(r, 2500));

		confirmPay();
	};

	return (
		<div className="min-h-screen bg-slate-100 p-6" dir="rtl">
			<div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-sm">
				<h1 className="mb-6 text-center text-xl font-bold text-slate-900">
					درگاه پرداخت
				</h1>

				<PaymentSummary merchantName="فروشگاه رویکس گالری" amount={560000} />

				<CardForm formData={formData} errors={errors} onChange={handleChange} />

				<PaymentButton onClick={handlePay} loading={status === "processing"} />
				<button
					onClick={() => {
						refetch();
						router.back();
					}}
					className="mt-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-black/70 transition bg-red-200 hover:bg-red-300/80 focus:outline-none focus:ring-2 focus:ring-blue-200"
				>
					{"انصراف"}
				</button>

				<PaymentStatusView status={status} message={message} />
			</div>
		</div>
	);
};

export default PaymentPage;

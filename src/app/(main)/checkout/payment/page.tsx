import { PaymentPayload } from "@/components/main-app/checkout/components/checkout-actions";

export default function FakePayment({ payload }: { payload: PaymentPayload }) {
	return <div>{`${payload.shippingAddress}`}</div>;
}

import CheckoutLayout from "@/components/main-app/checkout/components/checkout-layout";
import QueryProvider from "@/providers/query-provider";

export default function CheckoutPage() {
	return (
		<QueryProvider>
			<CheckoutLayout />
		</QueryProvider>
	);
}

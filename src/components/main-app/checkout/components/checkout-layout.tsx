"use client";

import { useGetUser } from "@/hooks/use-get-user";
import { useCartStore } from "../../cart/hooks/use-cart-CRUD";
import AddressForm from "./address-form";
import CheckoutActions from "./checkout-actions";
import CheckoutSummary from "./checkout-summary";
import RecipientInfoCard from "./recipient-info-card";
import ShippingMethodSelector from "./shipping-method-selector";

export interface User {
	id: number;
	name: string;
	phone: string;
	email?: string;
}

export default function CheckoutLayout() {
	const { user, error, isLoading } = useGetUser();

	const userData = user;

	// cart

	const { cart } = useCartStore();

	return (
		<div className="mx-auto max-w-7xl px-4 py-6">
			<div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
				<div className="lg:col-span-4 h-[60vh] overflow-auto">
					<div className="sticky top-6 space-y-4">
						<CheckoutSummary cart={cart} />
					</div>
				</div>
				<div className="lg:col-span-8 space-y-6 h-[60vh] overflow-y-auto rounded-sm custom-scrollbar">
					<RecipientInfoCard userData={userData} />

					<AddressForm userData={userData} />

					<ShippingMethodSelector />
				</div>
				<div className="w-full lg:col-span-12">
					<CheckoutActions userData={userData} />
				</div>
			</div>
		</div>
	);
}

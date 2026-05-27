import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CheckoutProvider } from "../utils/checkout-context";
import AddressForm from "./address-form";
import CheckoutActions from "./checkout-actions";
import CheckoutProgress from "./checkout-progress";
import CheckoutSummary from "./checkout-summary";
import RecipientInfoCard from "./recipient-info-card";
import ShippingMethodSelector from "./shipping-method-selector";

export interface User {
	id: number;
	name: string;
	phone: string;
	email?: string;
}
export type UserData = {
	success: boolean;
	data: User;
};

export default async function CheckoutLayout() {
	const cookieStore = await cookies();
	const token = cookieStore.get("access_token")?.value;
	const backendUrl = process.env.BACKEND_URL;

	if (!token) {
		redirect("/auth/login?callback=/checkout");
	}

	let userData: UserData | null = null;

	try {
		const res = await fetch(`${backendUrl}/api/auth/me`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			cache: "no-store",
		});

		if (res.ok) {
			userData = await res.json();
		} else if (res.status === 401) {
			redirect("/auth/login");
		} else {
			console.error(`Backend Error: ${res.status} ${res.statusText}`);
		}
	} catch (error) {
		console.error("Critical Fetch Error:", error);
	}

	return (
		<CheckoutProvider>
			<div className="mx-auto max-w-7xl px-4 py-6">
				<CheckoutProgress currentStep={2} />

				<div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
					<div className="lg:col-span-8 space-y-6 h-[70vh] overflow-y-auto rounded-sm pr-2 custom-scrollbar">
						<RecipientInfoCard userData={userData?.data} />

						<AddressForm userData={userData?.data} />

						<ShippingMethodSelector />
					</div>

					<div className="lg:col-span-4">
						<div className="sticky top-6 space-y-4">
							<CheckoutSummary />
							<CheckoutActions userData={userData} />
						</div>
					</div>
				</div>
			</div>
		</CheckoutProvider>
	);
}

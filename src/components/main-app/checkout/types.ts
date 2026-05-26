export type ShippingMethod = "post" | "tipax" | "courier" | "pickup";

export interface UserProfile {
	firstName: string;
	lastName: string;
	phone: string;
}

export interface CheckoutAddress {
	province: string;
	city: string;
	address: string;
	postalCode: string;
	extraNote?: string;
}

export interface CheckoutFormValues {
	address: CheckoutAddress;
	shippingMethod: ShippingMethod;
}

"use client";
import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from "react";
import { AddressFormValues } from "./checkout-form-schema";

export type Methods = {
	value: ShippingMethod;
	title: string;
	description: string;
	price: string;
};
export type ShippingMethod = "post" | "tipax" | "courier" | "pickup";
interface CheckoutContextType {
	addressData: AddressFormValues | null;
	setAddressData: (data: AddressFormValues) => void;
	shippingMethod: ShippingMethod;
	setShippingMethod: Dispatch<SetStateAction<ShippingMethod>>;
	methods: Methods[];
}

export const methods: Methods[] = [
	{
		value: "post",
		title: "پست پیشتاز",
		description: "تحویل 2 تا 4 روز کاری",
		price: "600000",
	},
	{
		value: "tipax",
		title: "تیپاکس",
		description: "تحویل 1 تا 2 روز کاری",
		price: "950000",
	},
	{
		value: "courier",
		title: "پیک موتوری",
		description: "فقط برای تهران، همان روز",
		price: "1200000",
	},
	{
		value: "pickup",
		title: "تحویل حضوری",
		description: "تحویل از فروشگاه",
		price: "0",
	},
];

const CheckoutContext = createContext<CheckoutContextType | undefined>(
	undefined
);

export const CheckoutProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [addressData, setAddressData] = useState<AddressFormValues | null>(
		null
	);
	const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("post");

	return (
		<CheckoutContext.Provider
			value={{
				addressData,
				setAddressData,
				shippingMethod,
				setShippingMethod,
				methods,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
};

export const useCheckout = () => {
	const context = useContext(CheckoutContext);
	if (!context)
		throw new Error("useCheckout must be used within CheckoutProvider");
	return context;
};

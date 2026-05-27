"use client";
import React, { createContext, useContext, useState } from "react";
import { AddressFormValues } from "./checkout-form-schema";

interface CheckoutContextType {
	addressData: AddressFormValues | null;
	setAddressData: (data: AddressFormValues) => void;
	shippingMethod: string;
	setShippingMethod: (method: string) => void;
}

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
	const [shippingMethod, setShippingMethod] = useState("post");

	return (
		<CheckoutContext.Provider
			value={{ addressData, setAddressData, shippingMethod, setShippingMethod }}
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

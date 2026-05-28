"use client";
import { useGetOrders, useGetOrdersAdmin } from "@/hooks/use-get-orders";
import { OrdersListResponse } from "@/types/orders-type";
import { createContext, ReactNode, useContext } from "react";

type OrdersContextType = {
	orders: OrdersListResponse;
	adminOrders: OrdersListResponse;
};

interface Props {
	children: ReactNode;
}

export const OrdersContext = createContext<OrdersContextType | null>(null);

export const OrdersProvider = ({ children }: Props) => {
	const { orders } = useGetOrders();
	const { adminOrders } = useGetOrdersAdmin();

	return (
		<OrdersContext.Provider value={{ orders, adminOrders }}>
			{children}
		</OrdersContext.Provider>
	);
};

export const useOrders = () => {
	const context = useContext(OrdersContext);
	if (!context) {
		throw new Error("useAppConfig must be used within an AppProvider");
	}
	return context;
};

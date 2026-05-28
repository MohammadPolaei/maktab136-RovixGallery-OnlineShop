import { getOrders, getOrdersAdmin } from "@/services/orders";
import { useQuery } from "@tanstack/react-query";

export function useGetOrders() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["orders"],
		queryFn: async () => {
			const res = await getOrders();
			return { orders: res };
		},
		staleTime: 1000 * 60,
	});

	return {
		orders: data?.orders,
		isLoading,
		error,
	};
}

export function useGetOrdersAdmin() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["admin-orders"],
		queryFn: async () => {
			const res = await getOrdersAdmin();
			return { orders: res };
		},
		staleTime: 1000 * 60,
	});

	return {
		adminOrders: data?.orders,
		isAdminLoading: isLoading,
		adminError: error,
	};
}

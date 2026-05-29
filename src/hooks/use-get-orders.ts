import { getOrders, getOrdersAdmin } from "@/services/orders";
import { useQuery } from "@tanstack/react-query";

type UseOrdersParams = {
	page?: number;
	limit?: number;
};

export function useGetOrders(params?: UseOrdersParams) {
	const page = params?.page ?? 1;
	const limit = params?.limit ?? 10;

	const { data, isLoading, error } = useQuery({
		queryKey: ["orders", page, limit],
		queryFn: async () => {
			const res = await getOrders({ page, limit });
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

export function useGetOrdersAdmin(params?: UseOrdersParams) {
	const page = params?.page ?? 1;
	const limit = params?.limit ?? 10;

	const { data, isLoading, error } = useQuery({
		queryKey: ["admin-orders", page, limit],
		queryFn: async () => {
			const res = await getOrdersAdmin({ page, limit });
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

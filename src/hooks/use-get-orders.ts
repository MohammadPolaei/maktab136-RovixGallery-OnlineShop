import { OrderStatusFilter } from "@/components/dashboard/components/aside/orders/orders";
import { getOrders, getOrdersAdmin } from "@/services/orders";
import { useQuery } from "@tanstack/react-query";

type UseOrdersParams = {
	page?: number;
	limit?: number;
	filter?: OrderStatusFilter;
};

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

export function useGetOrdersAdmin(params?: UseOrdersParams) {
	const page = params?.page ?? 1;
	const limit = params?.limit ?? 10;
	const status = params?.filter
		? params.filter == "all"
			? ""
			: params.filter
		: "";

	const { data, isLoading, error } = useQuery({
		queryKey: ["admin-orders", page, limit, status],
		queryFn: async () => {
			const res = await getOrdersAdmin({ page, limit, status });
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

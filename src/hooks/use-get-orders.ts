import { getOrders } from "@/services/orders";
import { useQuery } from "@tanstack/react-query";

export function useGetOrders() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["orders"],

		queryFn: async () => {
			const res = await getOrders();

			const orders = res;

			return {
				orders,
			};
		},

		placeholderData: (previousData) => previousData,
		staleTime: 1000 * 60,
	});
	return {
		orders: data?.orders,
		isLoading,
		error,
	};
}

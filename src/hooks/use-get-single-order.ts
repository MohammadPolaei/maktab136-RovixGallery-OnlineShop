import { getSingleOrder } from "@/services/orders";
import { useQuery } from "@tanstack/react-query";

export function useGetSingleOrder(id: string) {
	const { data, isLoading, error } = useQuery({
		queryKey: ["single-order", id],
		queryFn: () => getSingleOrder({ id }),
		staleTime: 1000 * 60,
		enabled: !!id,
	});

	return {
		singleOrder: data,
		isLoading,
		error,
	};
}

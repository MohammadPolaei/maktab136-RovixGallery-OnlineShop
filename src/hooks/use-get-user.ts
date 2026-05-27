import { getUser } from "@/services/get-user";
import { useQuery } from "@tanstack/react-query";

export function useGetUser() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["user"],

		queryFn: async () => {
			const res = await getUser();

			const user = await res.data;

			return {
				user,
			};
		},

		placeholderData: (previousData) => previousData,
		staleTime: 1000 * 60 * 2,
	});

	return {
		user: data?.user.data,
		isLoading,
		error,
	};
}

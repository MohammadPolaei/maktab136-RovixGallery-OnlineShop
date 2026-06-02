import { getUser } from "@/services/get-user";
import { useQuery } from "@tanstack/react-query";
export type UserProfile = {
	success: boolean;
	data: {
		_id: string;
		name: string;
		email: string;
		phone: string | number;
		role: "user" | "admin";
		createdAt: string;
		updatedAt: string;
		__v?: number;
	};
};
export function useGetUser() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["user"],

		queryFn: async () => {
			const res = await getUser();

			const user: UserProfile = await res.data;

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

"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { cartApi } from "../services/cart-CRUD";

export const queryKeys = {
	cart: ["cart"] as const,
};

export function useCartStore() {
	const qc = useQueryClient();

	const cartQuery = useQuery({
		queryKey: queryKeys.cart,
		queryFn: cartApi.getCart,
		staleTime: 1000 * 30,
	});

	const refresh = () => qc.invalidateQueries({ queryKey: queryKeys.cart });

	const onError = (err: unknown) => {};

	const add = useMutation({
		mutationFn: cartApi.addItem,
		onSuccess: refresh,
		onError,
	});

	const remove = useMutation({
		mutationFn: cartApi.removeItem,
		onSuccess: refresh,
		onError,
	});

	const update = useMutation({
		mutationFn: ({ itemId, quantity }: { itemId: string; quantity: number }) =>
			cartApi.updateItem(itemId, { quantity }),
		onSuccess: refresh,
		onError,
	});

	const clear = useMutation({
		mutationFn: cartApi.clear,
		onSuccess: refresh,
		onError,
	});

	const isMutating =
		add.isPending || remove.isPending || update.isPending || clear.isPending;

	const isLoading = cartQuery.isLoading || isMutating;

	const error =
		cartQuery.error ||
		add.error ||
		remove.error ||
		update.error ||
		clear.error ||
		null;

	const isError = Boolean(error);

	return {
		cart: cartQuery.data,
		refetch: cartQuery.refetch,

		isLoading,
		isError,
		error,

		addItem: add.mutate,
		removeItem: remove.mutate,
		updateItem: update.mutate,
		clearCart: clear.mutate,
	};
}

"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { cartApi } from "../services/cart-CRUD";

export const queryKeys = {
	cart: ["cart"] as const,
};

export function useCartStore() {
	const router = useRouter();
	const qc = useQueryClient();

	const cartQuery = useQuery({
		queryKey: queryKeys.cart,
		queryFn: cartApi.getCart,
		staleTime: 1000 * 30,
	});

	const onError = (err: unknown, actionText?: string) => {
		toast.error(actionText ? `${actionText} ناموفق بود` : "عملیات ناموفق بود", {
			description: typeof err == "string" ? err : null,
		});
	};

	const add = useMutation({
		mutationFn: cartApi.addItem,
		onSuccess: async () => {
			await qc.invalidateQueries({ queryKey: queryKeys.cart });
			toast.success("به سبد خرید اضافه شد");
		},
		onError: (err) => {
			if (err instanceof Error && err.message === "توکن نامعتبر است") {
				toast.message("برای افزودن به سبد خرید ، وارد حساب کابری خود شوید");
				setTimeout(() => router.push("/auth/login"), 2000);
			} else {
				onError(err.message);
			}
		},
	});

	const remove = useMutation({
		mutationFn: cartApi.removeItem,
		onSuccess: async () => {
			await qc.invalidateQueries({ queryKey: queryKeys.cart });
			toast.success("از سبد خرید حذف شد");
		},
		onError: (err) => onError(err, "حذف از سبد خرید"),
	});

	const update = useMutation({
		mutationFn: ({ itemId, quantity }: { itemId: string; quantity: number }) =>
			cartApi.updateItem(itemId, { quantity }),
		onSuccess: async () => {
			await qc.invalidateQueries({ queryKey: queryKeys.cart });
		},
		onError: (err) => onError(err, "به‌روزرسانی سبد خرید"),
	});

	const clear = useMutation({
		mutationFn: cartApi.clear,
		onSuccess: async () => {
			await qc.invalidateQueries({ queryKey: queryKeys.cart });
			toast.success("سبد خرید خالی شد");
		},
		onError: (err) => onError(err, "خالی کردن سبد خرید"),
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

		addItem: add.mutateAsync,
		removeItem: remove.mutateAsync,
		updateItem: update.mutateAsync,
		clearCart: clear.mutateAsync,
	};
}

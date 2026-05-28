import { OrderStatus } from "@/types/orders-type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { orderStatusUpdate } from "../services/order-status-update";

export const useOrderStatusChange = () => {
	const queryClient = useQueryClient();

	const updateOrderStatus = useMutation({
		mutationFn: ({ id, data }: { id: string; data: OrderStatus }) =>
			orderStatusUpdate({ id, statusPayload: data }),

		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["admin-orders"] });
			queryClient.invalidateQueries({ queryKey: ["orders"] });

			queryClient.invalidateQueries({
				queryKey: ["single-order", variables.id],
			});

			toast.success("به‌روزرسانی وضعیت سفارش با موفقیت انجام شد");
		},
		onError: (err: any) => {
			const errorMessage =
				err instanceof Error ? err.message : "عملیات ناموفق بود";
			toast.error(errorMessage);
		},
	});

	return {
		updateOrder: updateOrderStatus.mutateAsync,
		updateOrderError: updateOrderStatus.error,
		updateOrderPending: updateOrderStatus.isPending,
	};
};

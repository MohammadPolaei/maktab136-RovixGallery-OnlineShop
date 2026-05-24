// src/hooks/useProductMutations.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
	addProduct,
	deleteProduct,
	updateProduct,
} from "../services/product-CRUD";
import { ProductAddSchemaType } from "../utils/product-add-schema";

export const useProductMutations = () => {
	const queryClient = useQueryClient();

	const addMutation = useMutation({
		mutationFn: ({ data }: { data: ProductAddSchemaType }) => addProduct(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
			toast.success("افزودن محصول با موفقیت انجام شد");
		},
		onError: (err) =>
			toast.error("عملیات ناموفق بود", {
				description: typeof err == "string" ? err : null,
			}),
	});
	const updateMutation = useMutation({
		mutationFn: ({ id, data }: { id: string; data: ProductAddSchemaType }) =>
			updateProduct(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
			toast.success("به‌روزرسانی محصول با موفقیت انجام شد");
		},
		onError: (err) =>
			toast.error("عملیات ناموفق بود", {
				description: typeof err == "string" ? err : null,
			}),
	});

	const deleteMutation = useMutation({
		mutationFn: (id: string) => deleteProduct(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
			toast.success("حذف محصول با موفقیت انجام شد");
		},
		onError: (err) =>
			toast.error("عملیات ناموفق بود", {
				description: typeof err == "string" ? err : null,
			}),
	});

	return {
		addProduct: addMutation.mutate,
		updateProduct: updateMutation.mutate,
		deleteProduct: deleteMutation.mutate,

		isAdding: addMutation.isPending,
		isUpdating: updateMutation.isPending,
		isDeleting: deleteMutation.isPending,
		errorAdding: addMutation.error,
		errorUpdating: updateMutation.error,
		errorDeleting: deleteMutation.error,
	};
};

// src/hooks/useProductMutations.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
	addProduct,
	deleteProduct,
	updateProduct,
} from "../services/product-CRUD";
import { AddProductType } from "../types";

export const useProductMutations = () => {
	const queryClient = useQueryClient();

	const addMutation = useMutation({
		mutationFn: ({ data }: { data: AddProductType }) => addProduct(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
		},
	});
	const updateMutation = useMutation({
		mutationFn: ({ id, data }: { id: string; data: AddProductType }) =>
			updateProduct(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
		},
	});

	const deleteMutation = useMutation({
		mutationFn: (id: string) => deleteProduct(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
		},
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

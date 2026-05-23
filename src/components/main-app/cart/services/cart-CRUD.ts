// src/lib/api/cart.ts

import { ApiResponse, Cart, GetCartResponse } from "../types";

async function apiFetch<T>(url: string, init?: RequestInit): Promise<T> {
	const res = await fetch(url, {
		...init,
		headers: {
			"Content-Type": "application/json",
			...(init?.headers || {}),
		},
	});

	const data = await res.json().catch(() => ({}));

	if (!res.ok) {
		const message =
			(data as any)?.message ||
			(data as any)?.error ||
			(Array.isArray((data as any)?.errors)
				? (data as any).errors[0]?.msg
				: null) ||
			"Request failed";
		throw new Error(message);
	}

	return data as T;
}

// CRUD
export type CartMutationResponse = ApiResponse<Cart> & { message?: string };

export type AddToCartPayload = { productId: string; quantity: number };
export type UpdateCartItemPayload = { quantity: number };

export const cartApi = {
	getCart: () => apiFetch<GetCartResponse>("/api/cart"),

	addItem: (payload: AddToCartPayload) =>
		apiFetch<CartMutationResponse>("/api/cart/add", {
			method: "POST",
			body: JSON.stringify(payload),
		}),

	updateItem: (itemId: string, payload: UpdateCartItemPayload) =>
		apiFetch<CartMutationResponse>(`/api/cart/update/${itemId}`, {
			method: "PUT",
			body: JSON.stringify(payload),
		}),

	removeItem: (itemId: string) =>
		apiFetch<CartMutationResponse>(`/api/cart/remove/${itemId}`, {
			method: "DELETE",
		}),

	clear: () =>
		apiFetch<CartMutationResponse>("/api/cart/clear", {
			method: "DELETE",
		}),
};

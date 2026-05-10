// src/services/product.service.ts

import { AddProductType } from "../types";

export const addProduct = async (data: AddProductType) => {
	const res = await fetch(`/api/product`, {
		method: "PUT",
		body: JSON.stringify(data),
	});
	if (!res.ok) throw new Error("خطا در اضافه کردن محصول");
	return res.json();
};

export const updateProduct = async (id: string, data: any) => {
	const res = await fetch(`/api/product/${id}`, {
		method: "PUT",
		body: JSON.stringify(data),
	});
	if (!res.ok) throw new Error("خطا در بروزرسانی اطلاعات محصول");
	return res.json();
};

export const deleteProduct = async (id: string) => {
	const res = await fetch(`/api/product/${id}`, {
		method: "DELETE",
	});
	if (!res.ok) throw new Error("خطا در حذف محصول");
	return res.json();
};

// src/services/product.service.ts

import { ProductAddSchemaType } from "../utils/product-add-schema";

export const addProduct = async (data: ProductAddSchemaType) => {
	const formData = new FormData();

	formData.append("name", data.name);
	formData.append("description", data.description);
	formData.append("price", String(data.price));
	formData.append("stock", String(data.stock));
	formData.append("popularity", String(data.popularity));
	formData.append("brand", data.brand);
	formData.append("category", data.category);
	formData.append("brandCountry", data.brandCountry);
	formData.append("gender", data.gender);
	formData.append("material", data.material);
	formData.append("color", data.color);
	formData.append("dialColor", data.dialColor);
	formData.append("isAuthentic", String(data.isAuthentic));
	formData.append("isActive", String(data.isActive));

	data.images.forEach((file) => {
		formData.append("images", file);
	});

	const res = await fetch("/api/product", {
		method: "POST",
		body: formData,
	});

	if (!res.ok) throw new Error("خطا در افزودن محصول");
	return await res.json();
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

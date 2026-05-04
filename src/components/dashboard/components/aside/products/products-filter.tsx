"use client";

import { useState } from "react";

export default function ProductsFilters() {
	const [category, setCategory] = useState("");
	const [priceOrder, setPriceOrder] = useState("");
	const [sortBy, setSortBy] = useState("");

	return (
		<div className="flex gap-3 w-full md:w-auto">
			<select
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				className="border px-3 py-2 rounded-md text-sm border-(--color-gold-dark)"
			>
				<option value="">همه دسته‌ها</option>
				<option value="watch">ساعت</option>
				<option value="bag">کیف</option>
			</select>

			<select
				value={priceOrder}
				onChange={(e) => setPriceOrder(e.target.value)}
				className="border px-3 py-2 rounded-md text-sm border-(--color-gold-dark)"
			>
				<option value="">قیمت</option>
				<option value="asc">کم به زیاد</option>
				<option value="desc">زیاد به کم</option>
			</select>

			<select
				value={sortBy}
				onChange={(e) => setSortBy(e.target.value)}
				className="border px-3 py-2 rounded-md text-sm border-(--color-gold-dark)"
			>
				<option value="">مرتب‌سازی</option>
				<option value="new">جدیدترین</option>
				<option value="old">قدیمی‌ترین</option>
			</select>
		</div>
	);
}

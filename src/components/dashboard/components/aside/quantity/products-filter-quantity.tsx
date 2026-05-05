"use client";

import { useState } from "react";

export default function ProductsFiltersQuantity() {
	const [category, setCategory] = useState("");
	const [priceOrder, setPriceOrder] = useState("");
	const [sortBy, setSortBy] = useState("");

	return (
		<div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
			<select
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				className="border px-3 py-2 rounded-md text-sm border-black/10 outline-0"
			>
				<option value="">موجودی</option>
				<option value="watch">نا موجود</option>
				<option value="bag">موجود</option>
			</select>

			<select
				value={priceOrder}
				onChange={(e) => setPriceOrder(e.target.value)}
				className="border px-3 py-2 rounded-md text-sm border-black/10 outline-0"
			>
				<option value="">قیمت</option>
				<option value="asc">کم به زیاد</option>
				<option value="desc">زیاد به کم</option>
			</select>

			<select
				value={sortBy}
				onChange={(e) => setSortBy(e.target.value)}
				className="border px-3 py-2 rounded-md text-sm border-black/10 outline-0"
			>
				<option value="">مرتب‌سازی</option>
				<option value="new">جدیدترین</option>
				<option value="old">قدیمی‌ترین</option>
			</select>
		</div>
	);
}

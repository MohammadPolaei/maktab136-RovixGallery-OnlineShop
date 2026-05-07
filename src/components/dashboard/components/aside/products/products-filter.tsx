"use client";

import { ProductFiltersSet } from "@/components/dashboard/types";

export default function ProductsFilters(filters: ProductFiltersSet) {
	return (
		<div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
			<select
				value={filters.brand}
				onChange={(e) => filters.setBrand(e.target.value)}
				className="border px-3 py-2 rounded-md text-sm border-black/10 outline-0"
			>
				<option value="">برندها</option>
				<option value="Citizen">Citizen</option>
				<option value="Omega">Omega</option>
				<option value="Orient">Orient</option>
				<option value="Casio">Casio</option>
				<option value="Seiko">Seiko</option>
				<option value="Tag Heuer">Tag Heuer</option>
			</select>

			<select
				value={filters.gender}
				onChange={(e) => filters.setGender(e.target.value)}
				className="border px-3 py-2 rounded-md text-sm border-black/10 outline-0"
			>
				<option value="">جنسیت</option>
				<option value="men">مردانه</option>
				<option value="women">زنانه</option>
			</select>

			<select
				value={filters.priceOrder}
				onChange={(e) => filters.setPriceOrder(e.target.value)}
				className="border px-3 py-2 rounded-md text-sm border-black/10 outline-0"
			>
				<option value="">قیمت</option>
				<option value="asc">ارزان‌ترین</option>
				<option value="desc">گران‌ترین</option>
			</select>
		</div>
	);
}

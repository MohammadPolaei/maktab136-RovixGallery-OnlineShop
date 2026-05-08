"use client";

import { ProductFiltersSet } from "@/types/filters-type";

export default function ProductsFilters(filters: ProductFiltersSet) {
	return (
		<div className=" flex flex-col lg:justify-center lg:flex-row gap-3 w-full overflow-x-auto">
			<select
				value={filters.brand}
				onChange={(e) => filters.setBrand(e.target.value)}
				className="border px-3 py-2 rounded-md text-[8px] border-black/10 outline-0"
			>
				<option value="">برندها</option>
				<option value="Citizen">Citizen</option>
				<option value="Omega">Omega</option>
				<option value="Orient">Orient</option>
				<option value="Casio">Casio</option>
				<option value="Seiko">Seiko</option>
				<option value="Tag Heuer">Tag Heuer</option>
				<option value="Rolex">Rolex</option>
				<option value="Rolex">Hamilton</option>
				<option value="Longines">Longines</option>
				<option value="Tissot">Tissot</option>
			</select>

			<select
				value={filters.gender}
				onChange={(e) => filters.setGender(e.target.value)}
				className="border px-3 py-2 rounded-md text-[8px] border-black/10 outline-0"
			>
				<option value="">جنسیت</option>
				<option value="men">مردانه</option>
				<option value="women">زنانه</option>
			</select>

			<select
				value={filters.sort}
				onChange={(e) => filters.setSort(e.target.value)}
				className="border px-3 py-2 rounded-md text-[8px] border-black/10 outline-0"
			>
				<option value="">قیمت</option>
				<option value="cheap">ارزان‌ترین</option>
				<option value="expensive">گران‌ترین</option>
			</select>
			<select
				value={filters.brandCountry}
				onChange={(e) => filters.setBrandCountry(e.target.value)}
				className="border px-3 py-2 rounded-md text-[8px] border-black/10 outline-0"
			>
				<option value="">کشور</option>
				<option value="Japan">ژاپن</option>
				<option value="Switzerland">سوئیس</option>
			</select>
			<select
				value={filters.color}
				onChange={(e) => filters.setColor(e.target.value)}
				className="border px-3 py-2 rounded-md text-[8px] border-black/10 outline-0"
			>
				<option value="">رنگ</option>
				<option value="Black">مشکی</option>
				<option value="Blue">آبی</option>
				<option value="Silver">نقره ای</option>
				<option value="Brown">قهوه ای</option>
			</select>
			<select
				value={filters.dialColor}
				onChange={(e) => filters.setDialColor(e.target.value)}
				className="border px-3 py-2 rounded-md text-[8px] border-black/10 outline-0"
			>
				<option value="">رنگ صفحه</option>
				<option value="Black">مشکی</option>
				<option value="Green">سبز</option>
				<option value="Blue">آبی</option>
				<option value="White">سفید</option>
			</select>
			<select
				value={filters.material}
				onChange={(e) => filters.setMaterial(e.target.value)}
				className="border px-3 py-2 rounded-md text-[8px] border-black/10 outline-0"
			>
				<option value="">جنس بدنه</option>
				<option value="Leather">چرم</option>
				<option value="Rubber">لاستیک</option>
				<option value="Titanium">تیتانیوم</option>
				<option value="Stainless Steel">استیل ضد زنگ</option>
			</select>
			<select
				value={filters.available}
				onChange={(e) => filters.setAvailable(e.target.value)}
				className="border px-3 py-2 rounded-md text-[8px] border-black/10 outline-0"
			>
				<option value="">موجودی</option>
				<option value="true">موجود</option>
				<option value="false">ناموجود</option>
			</select>
		</div>
	);
}

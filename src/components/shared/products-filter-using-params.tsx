"use client";

import { useRouter, useSearchParams } from "next/navigation";

export interface ProductSearchParams {
	page?: string;
	brand?: string;
	gender?: string;
	sort?: string;
	color?: string;
	dialColor?: string;
	material?: string;
	brandCountry?: string;
	available?: string;
}

export default function ProductsFilterUsingParams() {
	const router = useRouter();
	const params = useSearchParams();

	const updateParam = (key: keyof ProductSearchParams, value: string) => {
		const newParams = new URLSearchParams(params.toString());

		if (!value) newParams.delete(key);
		else newParams.set(key, value);

		router.push(`/products?${newParams.toString()}`);
	};

	const clearAll = () => {
		router.push("/products");
	};

	return (
		<div className="flex flex-col gap-3 w-full overflow-x-auto">
			{/* برند */}
			<select
				value={params.get("brand") ?? ""}
				onChange={(e) => updateParam("brand", e.target.value)}
				className="border px-3 py-2 rounded-md text-[12px] border-black/10"
			>
				<option value="">برندها</option>
				<option value="Citizen">Citizen</option>
				<option value="Omega">Omega</option>
				<option value="Orient">Orient</option>
				<option value="Casio">Casio</option>
				<option value="Seiko">Seiko</option>
				<option value="Tag Heuer">Tag Heuer</option>
				<option value="Rolex">Rolex</option>
				<option value="Hamilton">Hamilton</option>
				<option value="Longines">Longines</option>
				<option value="Tissot">Tissot</option>
			</select>

			{/* جنسیت */}
			<select
				value={params.get("gender") ?? ""}
				onChange={(e) => updateParam("gender", e.target.value)}
				className="border px-3 py-2 rounded-md text-[12px] border-black/10"
			>
				<option value="">جنسیت</option>
				<option value="مردانه">مردانه</option>
				<option value="زنانه">زنانه</option>
			</select>

			{/* قیمت (مرتب‌سازی) */}
			<select
				value={params.get("sort") ?? ""}
				onChange={(e) => updateParam("sort", e.target.value)}
				className="border px-3 py-2 rounded-md text-[12px] border-black/10"
			>
				<option value="">قیمت</option>
				<option value="cheap">ارزان‌ترین</option>
				<option value="expensive">گران‌ترین</option>
			</select>

			{/* کشور سازنده برند */}
			<select
				value={params.get("brandCountry") ?? ""}
				onChange={(e) => updateParam("brandCountry", e.target.value)}
				className="border px-3 py-2 rounded-md text-[12px] border-black/10"
			>
				<option value="">کشور</option>
				<option value="ژاپن">ژاپن</option>
				<option value="سوئیس">سوئیس</option>
			</select>

			{/* رنگ */}
			<select
				value={params.get("color") ?? ""}
				onChange={(e) => updateParam("color", e.target.value)}
				className="border px-3 py-2 rounded-md text-[12px] border-black/10"
			>
				<option value="">رنگ بدنه</option>
				<option value="مشکی">مشکی</option>
				<option value="آبی">آبی</option>
				<option value="نقره ای">نقره ای</option>
				<option value="قهوه ای">قهوه ای</option>
			</select>

			{/* رنگ صفحه */}
			<select
				value={params.get("dialColor") ?? ""}
				onChange={(e) => updateParam("dialColor", e.target.value)}
				className="border px-3 py-2 rounded-md text-[12px] border-black/10"
			>
				<option value="">رنگ صفحه</option>
				<option value="مشکی">مشکی</option>
				<option value="سبز">سبز</option>
				<option value="آبی">آبی</option>
				<option value="سفید">سفید</option>
			</select>

			{/* جنس بدنه */}
			<select
				value={params.get("material") ?? ""}
				onChange={(e) => updateParam("material", e.target.value)}
				className="border px-3 py-2 rounded-md text-[12px] border-black/10"
			>
				<option value="">جنس بدنه</option>
				<option value="چرم">چرم</option>
				<option value="لاستیک">لاستیک</option>
				<option value="تیتانیوم">تیتانیوم</option>
				<option value="استیل ضد زنگ">استیل ضد زنگ</option>
			</select>

			{/* موجودی */}
			<select
				value={params.get("available") ?? ""}
				onChange={(e) => updateParam("available", e.target.value)}
				className="border px-3 py-2 rounded-md text-[12px] border-black/10"
			>
				<option value="">موجودی</option>
				<option value="true">موجود</option>
				<option value="false">ناموجود</option>
			</select>

			{/* پاک کردن فیلترها */}
			<button
				onClick={clearAll}
				className="border px-4 py-2 rounded-md text-[12px] bg-red-50 text-red-600 border-red-200"
			>
				پاک کردن فیلترها
			</button>
		</div>
	);
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SummaryFilter from "../base/summary-filter";

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

/* ---------------- OPTIONS ---------------- */

const brands = [
	"Rolex",
	"Omega",
	"Casio",
	"Citizen",
	"Seiko",
	"Orient",
	"Hamilton",
	"Longines",
	"Tissot",
	"Tag Heuer",
];

const brandCountries = ["سوئیس", "ژاپن"];

const genders = ["مردانه", "زنانه", "فاقد جنسیت"];

const materials = ["چرم", "لاستیک", "تیتانیوم", "استیل ضد زنگ"];

const dialColors = [
	{ label: "مشکی", value: "مشکی", hex: "#000" },
	{ label: "سبز", value: "سبز", hex: "#20A520" },
	{ label: "سفید", value: "سفید", hex: "#FFF" },
	{ label: "آبی", value: "آبی", hex: "#1D4ED8" },
];
const strapColors = [
	{ label: "مشکی", value: "مشکی", hex: "#000" },
	{ label: "قهوه‌ای", value: "قهوه‌ای", hex: "#7C4A2D" },
	{ label: "نقره‌ای", value: "نقره‌ای", hex: "#BFC3C9" },
	{ label: "آبی", value: "آبی", hex: "#1D4ED8" },
];

const sortOptions = [
	{ label: "جدیدترین", value: "newest" },
	{ label: "ارزان‌ترین", value: "cheap" },
	{ label: "گران‌ترین", value: "expensive" },
	{ label: "محبوبترین", value: "popularity" },
];

export default function ProductsFilter({
	mobileResponsive,
}: {
	mobileResponsive: boolean;
}) {
	const router = useRouter();
	const searchParams = useSearchParams();

	/* ---------------- LOGIC ---------------- */

	const updateSingle = (key: keyof ProductSearchParams, value: string) => {
		const params = new URLSearchParams(searchParams.toString());

		if (!value) params.delete(key);
		else params.set(key, value);

		params.delete("page");

		router.push(`/products?${params.toString()}`, { scroll: false });
	};

	const updateMulti = (key: keyof ProductSearchParams, value: string) => {
		const params = new URLSearchParams(searchParams.toString());

		const current = params.get(key)
			? params.get(key)!.split(",").filter(Boolean)
			: [];

		let updated: string[];

		if (current.includes(value)) {
			updated = current.filter((v) => v !== value);
		} else {
			updated = [...current, value];
		}

		if (updated.length === 0) params.delete(key);
		else params.set(key, updated.join(","));

		params.delete("page");

		router.push(`/products?${params.toString()}`, { scroll: false });
	};

	const isChecked = (
		key: keyof ProductSearchParams,
		value: string
	): boolean => {
		const currentStr = searchParams.get(key);
		if (!currentStr) return false;
		return currentStr.split(",").includes(value);
	};

	const clearFilters = () => {
		router.push("/products");
	};

	return (
		<aside
			dir="rtl"
			className={`w-full max-w-sm max-h-screen overflow-y-auto bg-white ${
				mobileResponsive
					? ""
					: "border border-gray-100 shadow-2xl shadow-black/5 p-6"
			} rounded-md flex flex-col gap-2 text-[10px]`}
		>
			{/* HEADER */}

			<div className="flex items-center justify-between border-b border-black/10 pb-4">
				<div className="font-bold text-gray-800">فیلتر محصولات</div>

				<button
					onClick={clearFilters}
					className="text-[10px] text-red-500 px-3 py-1 rounded-md bg-red-500/10 cursor-pointer hover:bg-red-500/50 hover:text-white transition-all duration-300 ease-in-out"
				>
					حذف فیلتر
				</button>
			</div>

			{/* BRAND */}

			<SummaryFilter title="برند">
				{brands.map((b) => (
					<summary key={b} className="list-none py-1">
						<label className="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								checked={isChecked("brand", b)}
								onChange={() => updateMulti("brand", b)}
							/>
							<span className="text-[10px]">{b}</span>
						</label>
					</summary>
				))}
			</SummaryFilter>

			{/* MATERIAL */}

			<SummaryFilter title="جنس بند">
				{materials.map((m) => (
					<summary key={m} className="list-none py-1">
						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								checked={isChecked("material", m)}
								onChange={() => updateMulti("material", m)}
							/>
							<span className="text-[10px]">{m}</span>
						</label>
					</summary>
				))}
			</SummaryFilter>

			{/* STRAP COLOR */}

			<div className="flex flex-col gap-2">
				<h3 className="text-[10px] font-bold text-gray-700">رنگ بند</h3>

				<div className="flex flex-wrap gap-2">
					{strapColors.map((c) => (
						<button
							key={c.value}
							onClick={() => updateMulti("color", c.value)}
							className={`w-5 h-5 rounded-full border border-black/10 cursor-pointer ${
								isChecked("color", c.value) ? "ring-2 ring-yellow-600" : ""
							}`}
							style={{ backgroundColor: c.hex }}
						/>
					))}
				</div>
			</div>

			{/* DIAL COLOR */}

			<div className="flex flex-col gap-2">
				<h3 className="text-[10px] font-bold text-gray-700">رنگ صفحه</h3>
				<div className="flex flex-wrap gap-2">
					{dialColors.map((c) => (
						<button
							key={c.value}
							onClick={() => updateMulti("dialColor", c.value)}
							className={`w-5 h-5 rounded-full border border-black/10 cursor-pointer ${
								isChecked("dialColor", c.value) ? "ring-2 ring-yellow-600" : ""
							}`}
							style={{ backgroundColor: c.hex }}
						/>
					))}
				</div>
			</div>

			{/* GENDER */}

			<div className="flex flex-col gap-2">
				<label className="text-[10px] font-bold text-gray-700">جنسیت</label>

				<select
					value={searchParams.get("gender") || ""}
					onChange={(e) => updateSingle("gender", e.target.value)}
					className={`${
						searchParams.get("gender") ? "bg-(--color-accent-green)/10" : ""
					} shadow rounded-md px-3 py-2 text-[10px] outline-0 cursor-pointer`}
				>
					<option value="">انتخاب جنسیت</option>

					{genders.map((g) => (
						<option key={g} value={g}>
							{g}
						</option>
					))}
				</select>
			</div>

			{/* BRAND COUNTRY */}

			<div className="flex flex-col gap-2">
				<label className="text-[10px] font-bold text-gray-700">
					کشور سازنده
				</label>

				<select
					value={searchParams.get("brandCountry") || ""}
					onChange={(e) => updateSingle("brandCountry", e.target.value)}
					className={`${
						searchParams.get("brandCountry")
							? "bg-(--color-accent-green)/10"
							: ""
					} shadow rounded-md px-3 py-2 text-[10px] outline-0 cursor-pointer`}
				>
					<option value="">همه کشورها</option>

					{brandCountries.map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</select>
			</div>

			{/* AVAILABLE */}

			<div className="flex flex-col gap-2">
				<label className="text-[10px] font-bold text-gray-700">موجودی</label>

				<select
					value={searchParams.get("available") || ""}
					onChange={(e) => updateSingle("available", e.target.value)}
					className={`${
						searchParams.get("available") ? "bg-(--color-accent-green)/10" : ""
					} shadow rounded-md px-3 py-2 text-[10px] outline-0 cursor-pointer`}
				>
					<option value="">همه</option>
					<option value="true">فقط موجود</option>
					<option value="false">ناموجود</option>
				</select>
			</div>

			{/* SORT */}

			<div className="flex flex-col gap-2">
				<label className="text-[10px] font-bold text-gray-700">مرتب سازی</label>

				<select
					value={searchParams.get("sort") || ""}
					onChange={(e) => updateSingle("sort", e.target.value)}
					className={`${
						searchParams.get("sort") ? "bg-(--color-accent-green)/10" : ""
					} shadow rounded-md px-3 py-2 text-[10px] outline-0 cursor-pointer`}
				>
					<option value="">پیش فرض</option>

					{sortOptions.map((s) => (
						<option key={s.value} value={s.value}>
							{s.label}
						</option>
					))}
				</select>
			</div>
		</aside>
	);
}

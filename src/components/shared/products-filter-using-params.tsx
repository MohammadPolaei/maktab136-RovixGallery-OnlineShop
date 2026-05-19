"use client";

import {
	BandIcon,
	BrandIcon,
	DialIcon,
	DollarIcon,
	GenderIcon,
	GlobeIcon,
	SortIcon,
	StockIcon,
} from "@/assets/SVG/product-card/filters/filters-icon";
import { useRouter, useSearchParams } from "next/navigation";
import SelectFilter from "../base/select-filter";
import SummaryFilter from "../base/summary-filter";
import PriceRangeFilter from "../main-app/products-list/components/price-range-filter";

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
	{ label: "مشکی", value: "مشکی", hex: "#263238" },
	{ label: "سبز", value: "سبز", hex: "#91F180" },
	{ label: "سفید", value: "سفید", hex: "#FFF" },
	{ label: "آبی", value: "آبی", hex: "#93C5FD" },
];
const strapColors = [
	{ label: "مشکی", value: "مشکی", hex: "#263238" },
	{ label: "قهوه‌ای", value: "قهوه‌ای", hex: "#7C4A2D" },
	{ label: "نقره‌ای", value: "نقره‌ای", hex: "#E2E8F0" },
	{ label: "آبی", value: "آبی", hex: "#93C5FD" },
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
			className={`w-full max-w-sm h-fit max-h-[76vh] overflow-y-auto bg-white ${
				mobileResponsive
					? ""
					: "border border-gray-100 shadow  shadow-black/5 p-6 sticky top-24"
			} rounded-sm flex flex-col justify-start gap-3.5 text-[10px]`}
		>
			{/* HEADER */}

			<div className="flex items-center justify-between border-b border-black/10 pb-4">
				<div className="font-bold text-gray-800">فیلتر محصولات</div>

				<button
					onClick={clearFilters}
					className="text-[10px] text-red-500 px-3 py-1 rounded-sm bg-red-500/10 cursor-pointer hover:bg-red-500/50 hover:text-white transition-all duration-300 ease-in-out"
				>
					حذف فیلتر
				</button>
			</div>
			{/* PRICE FILTERING */}
			<div className="w-full md:hidden">
				<SummaryFilter icon={<DollarIcon />} title="بر اساس قیمت">
					<div className="w-full md:hidden">
						<PriceRangeFilter />
					</div>
				</SummaryFilter>
			</div>

			{/* BRAND */}

			<SummaryFilter icon={<BrandIcon />} title="برند">
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

			<SummaryFilter icon={<BandIcon />} title="جنس بند">
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
			<SummaryFilter icon={<BandIcon />} title="رنگ بند">
				<div className="flex items-center gap-2">
					{strapColors.map((c) => (
						<summary key={c.label} className="list-none py-1">
							<button
								key={c.value}
								onClick={() => updateMulti("color", c.value)}
								className={`w-5 h-5 rounded-full border border-black/10 cursor-pointer ${
									isChecked("color", c.value) ? "ring-3 ring-black/30" : ""
								}`}
								style={{ backgroundColor: c.hex }}
							/>
						</summary>
					))}
				</div>
			</SummaryFilter>

			{/* DIAL COLOR */}
			<SummaryFilter icon={<DialIcon />} title="رنگ صفحه">
				<div className="flex items-center gap-2">
					{dialColors.map((c) => (
						<button
							key={c.value}
							onClick={() => updateMulti("dialColor", c.value)}
							className={`w-5 h-5 rounded-full border border-black/10 cursor-pointer ${
								isChecked("dialColor", c.value) ? "ring-3 ring-black/30" : ""
							}`}
							style={{ backgroundColor: c.hex }}
						/>
					))}
				</div>
			</SummaryFilter>

			{/* GENDER */}

			<SelectFilter icon={<GenderIcon />} title="جنسیت">
				<select
					value={searchParams.get("gender") || ""}
					onChange={(e) => updateSingle("gender", e.target.value)}
					className={`${
						searchParams.get("gender") ? "bg-(--color-accent-green)/10" : ""
					} shadow shadow-black/2 rounded-sm px-3 py-2 text-[10px] outline-1 outline-black/2 cursor-pointer`}
				>
					<option value="">انتخاب جنسیت</option>

					{genders.map((g) => (
						<option key={g} value={g}>
							{g}
						</option>
					))}
				</select>
			</SelectFilter>

			{/* BRAND COUNTRY */}

			<SelectFilter icon={<GlobeIcon />} title="کشور سازنده">
				<select
					value={searchParams.get("brandCountry") || ""}
					onChange={(e) => updateSingle("brandCountry", e.target.value)}
					className={`${
						searchParams.get("brandCountry")
							? "bg-(--color-accent-green)/10"
							: ""
					} shadow shadow-black/2 rounded-sm px-3 py-2 text-[10px] outline-1 outline-black/2 cursor-pointer`}
				>
					<option value="">همه کشورها</option>

					{brandCountries.map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</select>
			</SelectFilter>

			{/* AVAILABLE */}

			<SelectFilter icon={<StockIcon />} title="موجودی">
				<select
					value={searchParams.get("available") || ""}
					onChange={(e) => updateSingle("available", e.target.value)}
					className={`${
						searchParams.get("available") ? "bg-(--color-accent-green)/10" : ""
					} shadow shadow-black/2 rounded-sm px-3 py-2 text-[10px] outline-1 outline-black/2 cursor-pointer`}
				>
					<option value="">همه</option>
					<option value="true">فقط موجود</option>
					<option value="false">ناموجود</option>
				</select>
			</SelectFilter>

			{/* SORT */}

			<SelectFilter icon={<SortIcon />} title="مرتب سازی">
				<select
					value={searchParams.get("sort") || ""}
					onChange={(e) => updateSingle("sort", e.target.value)}
					className={`${
						searchParams.get("sort") ? "bg-(--color-accent-green)/10" : ""
					} shadow shadow-black/2 rounded-sm px-3 py-2 text-[10px] outline-1 outline-black/2 cursor-pointer`}
				>
					<option value="">پیش فرض</option>

					{sortOptions.map((s) => (
						<option key={s.value} value={s.value}>
							{s.label}
						</option>
					))}
				</select>
			</SelectFilter>
		</aside>
	);
}

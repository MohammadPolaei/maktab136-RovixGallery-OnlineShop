"use client";
import SearchInput from "@/components/base/search-input";
import ProductPagination from "@/components/shared/product-pagination";
import ProductsFilters from "@/components/shared/products-filter";
import { useGetProducts } from "@/hooks/use-get-data";
import ProductsTable from "../../../../shared/products-table";

export default function Quantity() {
	const {
		brandCountry,
		color,
		dialColor,
		material,
		brand,
		gender,
		sort,
		available,
		page,
		totalPages,
		products,
		search,
		loading,
		error,
		setBrand,
		setBrandCountry,
		setColor,
		setDialColor,
		setMaterial,
		setGender,
		setPage,
		setSearch,
		setSort,
		setAvailable,
	} = useGetProducts();
	return (
		<section dir="rtl" className="px-4 py-8 space-y-6">
			<h1 className="text-2xl font-bold text-(--color-heading)">
				موجودی و قیمت کالاها
			</h1>

			<div className="space-y-3 rounded-xl bg-white shadow-md">
				<div className="flex flex-col md:flex-row justify-between items-center gap-2 p-3">
					<ProductsFilters
						setBrandCountry={setBrandCountry}
						setColor={setColor}
						setDialColor={setDialColor}
						setMaterial={setMaterial}
						setBrand={setBrand}
						setGender={setGender}
						setSort={setSort}
						setAvailable={setAvailable}
						brandCountry={brandCountry}
						color={color}
						dialColor={dialColor}
						material={material}
						brand={brand}
						gender={gender}
						sort={sort}
						available={available}
					/>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-center gap-2 p-3">
					<SearchInput
						extraClasses="rounded-md"
						name="search"
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				{loading ? (
					<div>درحال بارگذاری اطلاعات . . .</div>
				) : error ? (
					<div>خطا در بارگذاری</div>
				) : (
					<ProductsTable productData={products} editable={false} />
				)}
			</div>
			<div className="flex justify-between items-center rounded-xl bg-white shadow-md p-3">
				<ProductPagination
					currentPage={page}
					totalPages={totalPages}
					setPage={setPage}
				/>
			</div>
		</section>
	);
}

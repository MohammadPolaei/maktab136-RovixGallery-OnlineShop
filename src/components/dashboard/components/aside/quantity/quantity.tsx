"use client";
import ProductPagination from "@/components/shared/product-pagination";
import ProductsFilters from "@/components/shared/products-filter";
import { useGetProducts } from "@/hooks/use-get-data";
import ProductsSearch from "../../../../shared/products-search";
import ProductsTable from "../../../../shared/products-table";

export default function Quantity() {
	const {
		brandCountry,
		color,
		dialColor,
		limit,
		material,
		brand,
		gender,
		sort,
		available,
		page,
		products,
		search,
		loading,
		error,
		setBrand,
		setBrandCountry,
		setColor,
		setDialColor,
		setLimit,
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
					<ProductsSearch />
				</div>
				<ProductsTable productData={products} editable={false} />
			</div>
			<div className="flex justify-between items-center rounded-xl bg-white shadow-md p-3">
				<ProductPagination currentPage={1} totalPages={10} />
			</div>
		</section>
	);
}

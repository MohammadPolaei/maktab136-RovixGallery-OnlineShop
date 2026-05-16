"use client";
import LoadingIcon from "@/assets/SVG/loading-icon";
import SearchInput from "@/components/base/search-input";
import SummaryFilterContainer from "@/components/base/summary-filter-container";
import { useProductMutations } from "@/components/dashboard/hooks/use-product-mutation";
import DashboardHeadingContainer from "@/components/shared/dashboard-heading-container";
import DashboardSectionsContainer from "@/components/shared/dashboard-sections-container";
import ProductPagination from "@/components/shared/product-pagination";
import ProductsFilters from "@/components/shared/products-filter";
import { useGetProducts } from "@/hooks/use-get-data";
import { useState } from "react";
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
		isLoading,
		error,
		setBrand,
		setBrandCountry,
		setColor,
		setDialColor,
		setMaterial,
		setGender,
		setPage,
		setSearchData,
		setSort,
		setAvailable,
	} = useGetProducts();

	const { updateProduct, isUpdating, errorUpdating } = useProductMutations();
	const [editSuccess, setEditSuccess] = useState(false);

	return (
		<section dir="rtl" className="px-4 py-8 space-y-6 relative">
			<DashboardHeadingContainer flexClass="flex-row">
				موجودی و قیمت کالاها
			</DashboardHeadingContainer>

			<DashboardSectionsContainer>
				<SummaryFilterContainer>
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
				</SummaryFilterContainer>
				<div className="flex flex-col md:flex-row justify-between items-center gap-2 py-3">
					<SearchInput
						extraClasses="rounded-md w-8"
						name="search"
						onChange={(e) => setSearchData(e.target.value)}
					/>
					<div className="text-[10px] md:text-[12px] text-black/80 bg-(--color-accent-green)/20 p-2 rounded-md">
						{"جهت ویرایش قیمت و موجودی هر محصول ، روی آن کلیک کنید"}
					</div>
				</div>
				{isLoading ? (
					<div className="w-full text-[10px] flex flex-col justify-center items-center p-3">
						<LoadingIcon />
						درحال بارگذاری محصولات . . .
					</div>
				) : error ? (
					<div className="text-red-500 text-center w-full">خطا در بارگذاری</div>
				) : (
					<ProductsTable
						isUpdating={isUpdating}
						editSuccess={editSuccess}
						errorUpdating={errorUpdating}
						setEditSuccess={setEditSuccess}
						updateProduct={updateProduct}
						productData={products}
						editable={false}
					/>
				)}
			</DashboardSectionsContainer>
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

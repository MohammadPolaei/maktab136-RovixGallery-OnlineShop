"use client";
import LoadingIcon from "@/assets/SVG/loading-icon";
import Modal from "@/components/base/modal";
import SearchInput from "@/components/base/search-input";
import { useProductMutations } from "@/components/dashboard/hooks/use-product-mutation";
import DashboardHeadingContainer from "@/components/shared/dashboard-heading-container";
import DashboardSectionsContainer from "@/components/shared/dashboard-sections-container";
import ProductPagination from "@/components/shared/product-pagination";
import ProductsFilters from "@/components/shared/products-filter";
import { useGetProducts } from "@/hooks/use-get-data";
import { useState } from "react";
import ProductsTable from "../../../../shared/products-table";
import AddProductForm from "./add-product-form";
import ProductAdd from "./product-add";

export default function Products() {
	// add new product
	const [open, setOpen] = useState(false);
	const [addSuccess, setAddSuccess] = useState(false);
	const [editSuccess, setEditSuccess] = useState(false);

	// Get products
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

	// CRUD

	const {
		updateProduct,
		deleteProduct,
		errorDeleting,
		isDeleting,
		isUpdating,
		errorUpdating,
	} = useProductMutations();

	return (
		<section dir="rtl" className="px-4 py-8 space-y-6 relative">
			<DashboardHeadingContainer flexClass="flex-row">
				مدیریت محصولات
			</DashboardHeadingContainer>

			<DashboardSectionsContainer>
				<details className="group w-full border border-(--color-dark-green)/50 rounded-md p-2 px-2 bg-white shadow-sm">
					<summary className="cursor-pointer font-medium text-(--color-dark-green) flex items-center justify-between transition-all ease-in-out duration-300">
						<span>اعمال فیلترها</span>
						<span className="transition-transform group-open:rotate-180">
							⌃
						</span>
					</summary>
					<div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 p-3">
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
				</details>
				<div className="flex flex-col md:flex-row justify-between items-center gap-2 py-3">
					<SearchInput
						extraClasses="rounded-md"
						name="search"
						onChange={(e) => setSearchData(e.target.value)}
					/>
					<ProductAdd setOpen={() => setOpen(!open)} />
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
						editSuccess={editSuccess}
						setEditSuccess={setEditSuccess}
						updateProduct={updateProduct}
						errorUpdating={errorUpdating}
						isUpdating={isUpdating}
						productData={products}
						editable
						deleteProduct={deleteProduct}
						errorDeleting={errorDeleting}
						isDeleting={isDeleting}
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

			{/* modal */}

			<Modal
				extraClasses="inset-[1%] md:inset-[15%]"
				open={open}
				setOpen={setOpen}
			>
				<DashboardHeadingContainer extraClasses="w-4/5" flexClass="flex-col">
					{"افزودن محصول"}
				</DashboardHeadingContainer>
				<AddProductForm setOpen={setOpen} setAddSuccess={setAddSuccess} />
			</Modal>
			{addSuccess && (
				<Modal
					key={"succes"}
					extraClasses="inset-[1%] md:inset-[40%] text-green-700 text-[10px]"
					open={addSuccess}
					setOpen={setAddSuccess}
				>{`محصول با موفقیت ثبت شد ✔`}</Modal>
			)}
		</section>
	);
}

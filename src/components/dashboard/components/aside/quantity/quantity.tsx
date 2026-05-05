import ProductPagination from "@/components/shared/product-pagination";
import ProductsSearch from "../products/products-search";
import ProductsTable from "../products/products-table";
import ProductsFiltersQuantity from "./products-filter-quantity";

export default function Quantity() {
	return (
		<section dir="rtl" className="px-4 py-8 space-y-6">
			<h1 className="text-2xl font-bold text-(--color-heading)">
				موجودی و قیمت کالاها
			</h1>

			<div className="space-y-3 rounded-xl bg-white shadow-md">
				<div className="flex flex-col md:flex-row justify-between items-center gap-2 p-3">
					<ProductsSearch />
					<ProductsFiltersQuantity />
				</div>
				<ProductsTable tableEditable={false} />
			</div>
			<div className="flex justify-between items-center rounded-xl bg-white shadow-md p-3">
				<ProductPagination currentPage={1} totalPages={10} />
			</div>
		</section>
	);
}

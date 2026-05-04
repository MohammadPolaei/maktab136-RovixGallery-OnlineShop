import ProductPagination from "@/components/shared/product-pagination";
import ProductsFilters from "./products-filter";
import ProductsSearch from "./products-search";
import ProductsTable from "./products-table";

export default function Products() {
	return (
		<section dir="rtl" className="px-4 py-8 space-y-6">
			<h1 className="text-2xl font-bold text-(--color-heading)">
				مدیریت محصولات
			</h1>

			<div className="flex flex-col md:flex-row items-center gap-4">
				<ProductsSearch />
				<ProductsFilters />
			</div>

			<ProductsTable />

			<ProductPagination />
		</section>
	);
}

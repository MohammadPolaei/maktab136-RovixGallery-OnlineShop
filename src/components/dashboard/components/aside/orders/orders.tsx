import ProductPagination from "@/components/shared/product-pagination";
import OrdersFilters from "./orders-filters";
import OrdersTable from "./orders-table";

export default function Orders() {
	return (
		<section dir="rtl" className="px-6 py-8 space-y-6">
			<h1 className="text-2xl font-bold text-(--color-heading)">
				مدیریت سفارشات
			</h1>

			<OrdersFilters />

			<OrdersTable />

			<ProductPagination currentPage={1} totalPages={5} />
		</section>
	);
}

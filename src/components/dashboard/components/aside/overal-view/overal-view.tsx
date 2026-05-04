import { categorySales } from "@/components/dashboard/constants";
import CategorySalesChart from "./category-sales-charts";
import OrdersTable from "./orders-table";
import SalesChart from "./sales-chart";
import StatsGrid from "./status-grid";

export default function OveralView() {
	return (
		<section className="flex flex-col justify-between gap-2 px-4 md:p-1">
			<StatsGrid />

			<div className="flex flex-row items-center justify-center gap-3">
				<SalesChart />
				<CategorySalesChart data={categorySales} />
			</div>

			<OrdersTable />
		</section>
	);
}

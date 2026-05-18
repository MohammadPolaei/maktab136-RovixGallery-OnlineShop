import { categorySales } from "@/components/dashboard/constants";
import OrdersTable from "../../../../shared/orders-table";
import CategorySalesChart from "./category-sales-charts";
import SalesChart from "./sales-chart";
import StatsGrid from "./status-grid";

export default function OveralView() {
	return (
		<section className="flex flex-col justify-between gap-2 px-4 md:p-1">
			<StatsGrid />

			<div className="md:flex flex-row items-center justify-center gap-2">
				<SalesChart />
				<CategorySalesChart data={categorySales} />
			</div>

			<OrdersTable />
		</section>
	);
}

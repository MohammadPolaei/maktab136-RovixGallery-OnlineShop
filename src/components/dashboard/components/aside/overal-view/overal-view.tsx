import OrdersTable from "./orders-table";
import SalesChart from "./sales-chart";
import StatsGrid from "./status-grid";

export default function OveralView() {
	return (
		<section
			dir="rtl"
			className="flex flex-col justify-between gap-2 px-4 md:p-6"
		>
			<StatsGrid />

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<SalesChart className="lg:col-span-2" />
				<div>empty</div>
			</div>

			<OrdersTable />
		</section>
	);
}

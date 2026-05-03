export default function OrdersTable() {
	return (
		<div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
			<h3 className="text-lg font-bold mb-4">آخرین سفارش‌ها</h3>

			<table className="w-full text-sm border-collapse">
				<thead>
					<tr className="bg-(--color-accent-green)/10 text-right">
						<th className="p-3">نام مشتری</th>
						<th className="p-3">محصول</th>
						<th className="p-3">مبلغ</th>
						<th className="p-3">وضعیت</th>
						<th className="p-3">تاریخ</th>
					</tr>
				</thead>

				<tbody>{/* data */}</tbody>
			</table>
		</div>
	);
}

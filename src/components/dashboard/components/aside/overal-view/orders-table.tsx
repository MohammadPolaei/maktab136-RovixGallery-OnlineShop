export default function OrdersTable() {
	return (
		<div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
			<h3 className="text-lg font-bold mb-4">آخرین سفارش‌ها</h3>

			<table className="w-full text-sm border-collapse">
				<thead>
					<tr className="bg-green-50 text-right">
						<th className="p-3">نام مشتری</th>
						<th className="p-3">محصول</th>
						<th className="p-3">مبلغ</th>
						<th className="p-3">وضعیت</th>
						<th className="p-3">تاریخ</th>
					</tr>
				</thead>

				<tbody>
					{/* {Orders.map((row: any, index: any) => (
						<tr key={index} className="border-b hover:bg-gray-50 transition">
							<td className="p-3 flex items-center gap-3">
								<Image
									src={row.productImage}
									width={40}
									height={40}
									alt={row.product}
									className="rounded-md"
								/>
								{row.customer}
							</td>
							<td className="p-3">{row.product}</td>
							<td className="p-3">{row.amount}</td>
							<td className="p-3">
								<StatusBadge status={row.status} />
							</td>
							<td className="p-3">{row.date}</td>
						</tr>
					))} */}
				</tbody>
			</table>
		</div>
	);
}

"use client";

import { ProductDataTable } from "@/types/product-data-type";
import ProductsTableRow from "../dashboard/components/aside/products/product-table-row";

export default function ProductsTable({
	productData,
	editable,
}: ProductDataTable) {
	return (
		<div className="bg-white rounded-lg overflow-x-auto">
			<table className="w-full text-[12px] text-center min-w-300">
				<thead className="bg-(--color-dark-green) text-(--color-bg) text-center">
					<tr>
						<th className="p-3 border-l border-(--color-gold)/20">تصویر</th>
						<th className="p-3 border-l border-(--color-gold)/20">نام محصول</th>
						<th className="p-3 border-l border-(--color-gold)/20">برند</th>
						<th className="p-3 border-l border-(--color-gold)/20">کشور</th>
						<th className="p-3 border-l border-(--color-gold)/20">جنس بدنه</th>
						<th className="p-3 border-l border-(--color-gold)/20">رنگ</th>
						<th className="p-3 border-l border-(--color-gold)/20">رنگ صفحه</th>
						<th className="p-3 border-l border-(--color-gold)/20">قیمت</th>
						<th className="p-3 border-l border-(--color-gold)/20">موجودی</th>
						<th className="p-3 border-l border-(--color-gold)/20">جنسیت</th>
						<th className="p-3 border-l border-(--color-gold)/20">محبوبیت</th>
						<th
							className={`${
								editable ? "" : "hidden"
							} p-3 border-l border-(--color-gold)/20`}
						>
							عملیات
						</th>
					</tr>
				</thead>

				<tbody>
					{productData.map((item) => (
						<ProductsTableRow
							key={item._id}
							product={item}
							editable={editable}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

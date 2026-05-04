"use client";

import { productsMockData } from "@/components/dashboard/constants";
import ProductsTableRow from "./product-table-row";

export default function ProductsTable() {
	return (
		<div className="bg-white rounded-lg shadow border border-gray-200 overflow-x-auto">
			<table className="w-full text-[12px] text-center min-w-300">
				<thead className="bg-(--color-super-dark-green) text-(--color-bg) text-center">
					<tr>
						<th className="p-3 border-l border-(--color-gold)/20">تصویر</th>
						<th className="p-3 border-l border-(--color-gold)/20">نام محصول</th>
						<th className="p-3 border-l border-(--color-gold)/20">برند</th>
						<th className="p-3 border-l border-(--color-gold)/20">قیمت</th>
						<th className="p-3 border-l border-(--color-gold)/20">موجودی</th>
						<th className="p-3 border-l border-(--color-gold)/20">دسته‌بندی</th>
						<th className="p-3 border-l border-(--color-gold)/20">محبوبیت</th>
						<th className="p-3 border-l border-(--color-gold)/20">عملیات</th>
					</tr>
				</thead>

				<tbody>
					{productsMockData.map((item) => (
						<ProductsTableRow key={item._id} product={item} />
					))}
				</tbody>
			</table>
		</div>
	);
}

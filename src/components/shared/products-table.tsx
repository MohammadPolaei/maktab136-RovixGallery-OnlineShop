"use client";

import { Product } from "@/types/product-data-type";
import { useEffect, useState } from "react";
import ProductsTableRow from "../dashboard/components/aside/products/product-table-row";
import getProducts from "../dashboard/services/get-products";

export default function ProductsTable({
	tableEditable,
}: {
	tableEditable: boolean;
}) {
	const [prodData, setProdData] = useState<Product[]>([]);
	const productData = getProducts();

	useEffect(() => {
		productData.then((result) => setProdData(result.data.data));
	}, []);

	return (
		<div className="bg-white rounded-lg overflow-x-auto">
			<table className="w-full text-[12px] text-center min-w-300">
				<thead className="bg-(--color-dark-green) text-(--color-bg) text-center">
					<tr>
						<th className="p-3 border-l border-(--color-gold)/20">تصویر</th>
						<th className="p-3 border-l border-(--color-gold)/20">نام محصول</th>
						<th className="p-3 border-l border-(--color-gold)/20">برند</th>
						<th className="p-3 border-l border-(--color-gold)/20">قیمت</th>
						<th className="p-3 border-l border-(--color-gold)/20">موجودی</th>
						<th className="p-3 border-l border-(--color-gold)/20">دسته‌بندی</th>
						<th className="p-3 border-l border-(--color-gold)/20">محبوبیت</th>
						<th
							className={`${
								tableEditable ? "" : "hidden"
							} p-3 border-l border-(--color-gold)/20`}
						>
							عملیات
						</th>
					</tr>
				</thead>

				<tbody>
					{prodData.map((item) => (
						<ProductsTableRow
							key={item._id}
							product={item}
							editable={tableEditable}
						/>
					))}

					{/* {productsMockData.map((item) => (
						<ProductsTableRow
							key={item._id}
							product={item}
							editable={tableEditable}
						/>
					))} */}
				</tbody>
			</table>
		</div>
	);
}

"use client";

import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import {
	prepareProductForUpdate,
	ProductDataTable,
} from "@/types/product-data-type";
import { useState } from "react";
import Modal from "../base/modal";
import ProductsTableRow from "./product-table-row";

export default function ProductsTable({
	productData,
	editable,
	editSuccess,
	errorUpdating,
	isUpdating,
	errorDeleting,
	isDeleting,
	setEditSuccess,
	updateProduct,
	deleteProduct,
}: ProductDataTable) {
	const [changes, setChanges] = useState({});
	const [editMode, setEditMode] = useState({});

	const handleCancel = () => {
		setChanges({});
		setEditMode({});
	};

	const handleSaveAll = async () => {
		const promises = Object.entries(changes).map(([id, data]: any) => {
			const product = productData.find((p) => p._id === id);
			return updateProduct({
				id,
				data: prepareProductForUpdate(product, data.price, data.stock),
			});
		});

		await Promise.all(promises)
			.then(() => {
				setChanges({});
				setEditMode({});
				setEditSuccess(true);
			})
			.catch((err) => console.error(err));
	};

	const handleUpdateChange = (
		id: string,
		field: "price" | "stock",
		value: number
	) => {
		setChanges((prev: any) => ({
			...prev,
			[id]: {
				price:
					field === "price"
						? value
						: prev[id]?.price ?? productData.find((p) => p._id === id)!.price,
				stock:
					field === "stock"
						? value
						: prev[id]?.stock ?? productData.find((p) => p._id === id)!.stock,
			},
		}));

		setEditMode((prev) => ({ ...prev, [id]: true }));
	};

	const handleCancelSingle = (id: string) => {
		setChanges((prev) => {
			const updated: Record<string, unknown> = { ...prev };
			delete updated[id];
			return updated;
		});
		setEditMode((prev) => {
			const updated: Record<string, unknown> = { ...prev };
			delete updated[id];
			return updated;
		});
	};

	const disabledButton = Object.keys(changes).length === 0;

	return (
		<section className="w-full flex flex-col justify-start items-center gap-2">
			{editable ? null : (
				<div className="w-full flex flex-row justify-end items-center gap-2">
					<button
						className="px-2 py-1 rounded-sm bg-red-600/70 text-white text-[12px]"
						onClick={handleCancel}
					>
						لغو همه
					</button>

					<button
						disabled={disabledButton}
						className="px-2 py-1 rounded-sm bg-green-600/70 text-white text-[12px] disabled:bg-gray-500 disabled:opacity-50"
						onClick={handleSaveAll}
					>
						ذخیره همه
					</button>
				</div>
			)}

			<div className="w-full bg-white rounded-sm overflow-x-auto">
				<table className="w-full text-[12px] text-center min-w-300">
					<thead className="bg-(--color-dark-green) text-(--color-bg)">
						<tr>
							<th className="p-3">تصویر</th>
							<th className="p-3">نام محصول</th>
							<th className="p-3">برند</th>
							<th className="p-3">کشور</th>
							<th className="p-3">جنس بدنه</th>
							<th className="p-3">رنگ</th>
							<th className="p-3">رنگ صفحه</th>
							<th className="p-3">قیمت</th>
							<th className="p-3">موجودی</th>
							<th className="p-3">جنسیت</th>
							<th className="p-3">محبوبیت</th>
							<th className={`${editable ? "" : "hidden"} p-3`}>عملیات</th>
						</tr>
					</thead>

					<tbody>
						{productData.map((item) => (
							<ProductsTableRow
								key={item._id}
								product={item}
								editable={editable}
								editMode={editMode}
								changes={changes}
								handleUpdateChange={handleUpdateChange}
								handleCancelSingle={handleCancelSingle}
								setEditSuccess={setEditSuccess}
								errorUpdating={errorUpdating}
								updateProduct={updateProduct}
								isUpdating={isUpdating}
								deleteProduct={deleteProduct}
								errorDeleting={errorDeleting}
								isDeleting={isDeleting}
							/>
						))}
					</tbody>
				</table>

				{isUpdating && (
					<Modal modalUsecaseType="message" open setOpen={() => {}}>
						{errorUpdating ? (
							<span className="text-red-500">{errorUpdating.message}</span>
						) : (
							<div className="flex flex-col items-center">
								<span>در حال بروزرسانی</span>
								<RovixLuxuryLoader />
							</div>
						)}
					</Modal>
				)}

				{isDeleting && (
					<Modal modalUsecaseType="message" open setOpen={() => {}}>
						<span>در حال حذف . . .</span>
					</Modal>
				)}
			</div>
		</section>
	);
}

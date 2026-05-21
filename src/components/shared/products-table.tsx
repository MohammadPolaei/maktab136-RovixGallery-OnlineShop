"use client";

import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import {
	prepareProductForUpdate,
	ProductDataTable,
} from "@/types/product-data-type";
import { useEffect, useState } from "react";
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
	const [changes, setChanges] = useState<any>({});

	// handle all changes
	const handleCancel = () => {
		setChanges({});
	};

	const handleSaveAll = async () => {
		const promises = Object.entries(changes).map(([id, data]: any) => {
			const product = productData.find((p) => p._id === id);

			return updateProduct({
				id,
				data: prepareProductForUpdate(product, data.price, data.stock),
			});
		});

		await Promise.all(promises);

		setChanges({});
		setEditSuccess(true);
	};

	// handle single change
	const handleUpdateChange = (
		id: string,
		data: { price: number; stock: number } | null
	) => {
		setChanges((prev: any) => {
			const newData = { ...prev };
			if (data === null) {
				delete newData[id];
			} else {
				newData[id] = data;
			}
			return newData;
		});
	};

	let disabledButton = Object.entries(changes).length == 0;
	useEffect(() => {
		disabledButton = Object.entries(changes).length == 0;
		console.log(changes);
	}, [changes]);

	return (
		<section className="w-full flex flex-col justify-start items-center gap-2">
			{editable ? null : (
				<div className="w-full flex flex-row justify-end items-center gap-2">
					<button
						className="px-2 py-1 rounded-sm bg-red-600/70 text-white text-[12px] disabled:bg-gray-600 hover:scale-110 origin-center cursor-pointer transition-all duration-500 ease-in-out"
						onClick={handleCancel}
					>
						لغو همه
					</button>

					<button
						disabled={disabledButton}
						className="px-2 py-1 rounded-sm bg-green-600/70 text-white text-[12px] disabled:bg-gray-600 hover:scale-110 origin-center cursor-pointer transition-all duration-500 ease-in-out"
						onClick={handleSaveAll}
					>
						ذخیره همه
					</button>
				</div>
			)}
			<div className="w-full bg-white rounded-sm overflow-x-auto">
				<table className="w-full text-[12px] text-center min-w-300">
					<thead className="bg-(--color-dark-green) text-(--color-bg) text-center">
						<tr>
							<th className="p-3 border-l border-(--color-gold)/20">تصویر</th>
							<th className="p-3 border-l border-(--color-gold)/20">
								نام محصول
							</th>
							<th className="p-3 border-l border-(--color-gold)/20">برند</th>
							<th className="p-3 border-l border-(--color-gold)/20">کشور</th>
							<th className="p-3 border-l border-(--color-gold)/20">
								جنس بدنه
							</th>
							<th className="p-3 border-l border-(--color-gold)/20">رنگ</th>
							<th className="p-3 border-l border-(--color-gold)/20">
								رنگ صفحه
							</th>
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
								handleUpdateChange={handleUpdateChange}
								setEditSuccess={setEditSuccess}
								errorUpdating={errorUpdating}
								updateProduct={updateProduct}
								isUpdating={isUpdating}
								deleteProduct={deleteProduct}
								errorDeleting={errorDeleting}
								isDeleting={isDeleting}
								key={item._id}
								product={item}
								editable={editable}
							/>
						))}
					</tbody>
				</table>
				{isUpdating && (
					<Modal
						modalUsecaseType="message"
						extraClasses="text-[10px]"
						open
						setOpen={() => {}}
					>
						{errorUpdating ? (
							<span className="text-red-500">
								{errorUpdating.message || "خطا در بروزرسانی محصولات"}
							</span>
						) : (
							<div className="flex flex-col items-center justify-center">
								<span>{"در حال بروزرسانی"}</span>
								<RovixLuxuryLoader />
							</div>
						)}
					</Modal>
				)}
				{isDeleting && (
					<Modal
						modalUsecaseType="message"
						extraClasses="text-[10px]"
						open
						setOpen={() => {}}
					>
						{errorDeleting ? (
							<span className="text-red-500">
								{errorDeleting.message || "خطا در حذف محصول"}
							</span>
						) : (
							<div className="flex flex-col items-center justify-center gap-2">
								<span>{"در حال حذف"}</span>
								<RovixLuxuryLoader />
							</div>
						)}
					</Modal>
				)}
				{editSuccess && (
					<Modal
						modalUsecaseType="message"
						key={"succes"}
						extraClasses=" text-green-700 text-[10px]"
						open={editSuccess}
						setOpen={setEditSuccess}
					>{`بروزرسانی محصولات با موفقیت انجام شد ✔`}</Modal>
				)}
			</div>
		</section>
	);
}

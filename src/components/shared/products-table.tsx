"use client";

import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import { ProductDataTable } from "@/types/product-data-type";
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
	return (
		<div className="bg-white rounded-sm overflow-x-auto">
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
							{errorUpdating.message || "خطا در بروزرسانی محصول"}
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
				>{`بروزرسانی محصول با موفقیت انجام شد ✔`}</Modal>
			)}
		</div>
	);
}

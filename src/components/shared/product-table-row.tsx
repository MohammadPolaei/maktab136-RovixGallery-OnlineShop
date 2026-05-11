import { DeleteIcon } from "@/assets/SVG/dashboard-icons/delete-icon";
import { EditIcon } from "@/assets/SVG/dashboard-icons/edit-icon";
import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import { TableRowPropsType } from "@/types/product-data-type";
import Image from "next/image";
import { useEffect, useState } from "react";
import AskModal from "../base/ask-modal";
import Modal from "../base/modal";
import ProductEdit from "../dashboard/components/aside/products/product-edit";

export default function ProductsTableRow({
	setEditSuccess,
	product,
	deleteProduct,
	editable,
	errorDeleting,
	isDeleting,
	updateProduct,
	errorUpdating,
	isUpdating,
}: TableRowPropsType) {
	const faNumber = (num: string | number) =>
		new Intl.NumberFormat("fa-IR").format(Number(num));
	// handle delete

	const [confirmQuestion, setConfirmQuestion] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);

	useEffect(() => {
		if (confirmQuestion && deleteProduct) {
			deleteProduct(product._id);
		}
	}, [confirmQuestion, deleteProduct, product._id]);

	// handle edit
	const [openEdit, setOpenEdit] = useState(false);

	return (
		<tr className="border-b border-(--color-accent-green)/20 hover:bg-(--color-accent-green)/10">
			<td className="p-3">
				<Image
					src={product.images[0]}
					alt={product.name}
					width={50}
					height={50}
					className="rounded"
				/>
			</td>

			<td className="p-3 font-medium">{product.name}</td>

			<td className="p-3">{product.brand}</td>
			<td className="p-3">{product.brandCountry}</td>
			<td className="p-3">{product.material}</td>
			<td className="p-3">{product.color}</td>
			<td className="p-3">{product.dialColor}</td>
			<td className="p-3 text-(--color-accent-green) font-bold">
				{faNumber(product.price).toLocaleString()} ریال
			</td>
			<td className="p-3">{faNumber(product.stock)}</td>
			<td className="p-3">{product.gender}</td>
			<td className="p-3">{faNumber(product.popularity)}</td>
			<td className={`${editable ? "" : "hidden"} p-3`}>
				<div className="flex justify-evenly items-center">
					<button
						className="hover:scale-120 origin-center active:scale-50 cursor-pointer transition-all duration-500 ease-in-out"
						onClick={() => setOpenEdit(true)}
					>
						<EditIcon />
					</button>
					<button
						className="hover:scale-120 origin-center active:scale-50 cursor-pointer transition-all duration-500 ease-in-out"
						onClick={() => setOpenDelete(true)}
					>
						<DeleteIcon />
					</button>
				</div>
				{openDelete ? (
					<AskModal
						confirmQuestion={confirmQuestion}
						setConfirmQuestion={setConfirmQuestion}
						openDelete={openDelete}
						setOpenDelete={setOpenDelete}
						theQuestion={`آیا از حذف این محصول ${product.name} اطمینان دارید ؟`}
					/>
				) : null}
				{isDeleting && (
					<Modal
						extraClasses="inset-[1%] md:inset-[40%]"
						open
						setOpen={() => {}}
					>
						{errorDeleting ? (
							<span className="text-red-500">{"خطا در حذف محصول"}</span>
						) : (
							<div className="flex flex-col items-center justify-center gap-2">
								<span>{"در حال حذف"}</span>
								<RovixLuxuryLoader />
							</div>
						)}
					</Modal>
				)}
				{openEdit && (
					<ProductEdit
						errorUpdating={errorUpdating}
						isUpdating={isUpdating}
						updateProduct={updateProduct}
						setEditSuccess={setEditSuccess}
						product={product}
						open
						setOpen={setOpenEdit}
						key={"edit"}
					/>
				)}
				{isUpdating && (
					<Modal
						extraClasses="inset-[1%] md:inset-[40%]"
						open
						setOpen={() => {}}
					>
						{errorDeleting ? (
							<span className="text-red-500">{"خطا در بروزرسانی محصول"}</span>
						) : (
							<div className="flex flex-col items-center justify-center gap-2">
								<span>{"در حال بروزرسانی"}</span>
								<RovixLuxuryLoader />
							</div>
						)}
					</Modal>
				)}
			</td>
		</tr>
	);
}

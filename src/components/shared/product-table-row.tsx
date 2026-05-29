"use client";
import { DeleteIcon } from "@/assets/SVG/dashboard-icons/delete-icon";
import { EditIcon } from "@/assets/SVG/dashboard-icons/edit-icon";
import { faNumber } from "@/utils/convert-number-into-persian";
import Image from "next/image";
import { useEffect, useState } from "react";
import AskModal from "../base/ask-modal";
import ProductEdit from "../dashboard/components/aside/products/product-edit";

export default function ProductsTableRow({
	product,
	editable,
	editMode,
	changes,
	handleUpdateChange,
	handleCancelSingle,
	setEditSuccess,
	errorUpdating,
	isUpdating,
	deleteProduct,
	updateProduct,
	isDeleting,
	errorDeleting,
}: any) {
	const isEditing = editMode[product._id] === true;
	const [openDelete, setOpenDelete] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);

	const price = changes[product._id]?.price ?? product.price;
	const stock = changes[product._id]?.stock ?? product.stock;

	useEffect(() => {
		if (confirmDelete) {
			deleteProduct(product._id);
			setConfirmDelete(false);
			setOpenDelete(false);
		}
	}, [confirmDelete]);

	return (
		<tr
			className={`${
				product.stock == 0
					? openEdit || openDelete
						? ""
						: "opacity-40 bg-black/10"
					: ""
			} border-b border-(--color-accent-green)/20 hover:bg-(--color-accent-green)/10 h-28`}
		>
			<td className="p-3">
				<Image
					unoptimized
					src={product.images[0]}
					alt={product.name}
					width={50}
					height={50}
					className="rounded-sm"
				/>
			</td>

			<td className="p-3">{product.name}</td>
			<td className="p-3">{product.brand}</td>
			<td className="p-3">{product.brandCountry}</td>
			<td className="p-3">{product.material}</td>
			<td className="p-3">{product.color}</td>
			<td className="p-3">{product.dialColor}</td>

			<td
				className="p-3"
				onClick={() =>
					!editable && handleUpdateChange(product._id, "price", price)
				}
			>
				{isEditing ? (
					<div className="relative flex flex-col items-center">
						<input
							type="number"
							value={price}
							min={1000}
							onChange={(e) =>
								handleUpdateChange(product._id, "price", Number(e.target.value))
							}
							className="bg-(--color-accent-green)/20 rounded-sm px-2 py-1 w-25 text-[10px] text-center"
						/>

						<button
							onClick={(e) => {
								e.stopPropagation();
								handleCancelSingle(product._id);
							}}
							className="absolute -top-6 -left-6 text-[10px] text-red-500 bg-red-500/20 px-2 py-1 rounded-sm cursor-pointer"
						>
							لغو
						</button>
					</div>
				) : (
					<span>{faNumber(product.price)} ریال</span>
				)}
			</td>

			<td
				className="p-3"
				onClick={() =>
					!editable && handleUpdateChange(product._id, "stock", stock)
				}
			>
				{isEditing ? (
					<input
						type="number"
						value={stock}
						onChange={(e) =>
							handleUpdateChange(product._id, "stock", Number(e.target.value))
						}
						className="bg-(--color-accent-green)/20 rounded-sm px-2 py-1 text-[10px] text-center w-14"
					/>
				) : (
					faNumber(product.stock)
				)}
			</td>

			<td className="p-3">{product.gender}</td>
			<td className="p-3">{faNumber(product.popularity)}</td>

			<td className={`${editable ? "" : "hidden"} p-3`}>
				<div className="flex justify-evenly items-center gap-2">
					<button
						onClick={() => setOpenEdit(true)}
						className="cursor-pointer outline-0 active:scale-110 origin-center"
					>
						<EditIcon />
					</button>

					<button
						onClick={() => setOpenDelete(true)}
						className="cursor-pointer outline-0 active:scale-110 origin-center"
					>
						<DeleteIcon />
					</button>
				</div>

				{openDelete && (
					<AskModal
						openDelete={openDelete}
						setOpenDelete={setOpenDelete}
						confirmQuestion={confirmDelete}
						setConfirmQuestion={setConfirmDelete}
						theQuestion={`آیا از حذف محصول ${product.name} اطمینان دارید؟`}
					/>
				)}

				{openEdit && (
					<ProductEdit
						open
						setOpen={setOpenEdit}
						product={product}
						updateProduct={updateProduct}
						setEditSuccess={setEditSuccess}
						errorUpdating={errorUpdating}
						isUpdating={isUpdating}
					/>
				)}
			</td>
		</tr>
	);
}

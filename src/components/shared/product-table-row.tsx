import { DeleteIcon } from "@/assets/SVG/dashboard-icons/delete-icon";
import { EditIcon } from "@/assets/SVG/dashboard-icons/edit-icon";
import {
	prepareProductForUpdate,
	TableRowPropsType,
} from "@/types/product-data-type";
import Image from "next/image";
import { useEffect, useState } from "react";
import AskModal from "../base/ask-modal";
import ProductEdit from "../dashboard/components/aside/products/product-edit";

export default function ProductsTableRow({
	product,
	editable,
	errorUpdating,
	isUpdating,
	setEditSuccess,
	deleteProduct,
	updateProduct,
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

	// handle price and Quantity edit
	const [price, setPrice] = useState(product.price);
	const [stock, setStock] = useState(product.stock);
	const [readyToEdit, setReadyToEdit] = useState(false);
	const isPriceInvalid = price < 1000;

	// handle update
	const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		updateProduct(
			{
				id: product._id,
				data: prepareProductForUpdate(product, price, stock),
			},
			{
				onSuccess: () => {
					setEditSuccess(true);
					setReadyToEdit(false);
				},
			}
		);
	};
	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setReadyToEdit(false);
		setStock(product.stock);
		setPrice(product.price);
	};

	return (
		<tr className="border-b border-(--color-accent-green)/20 hover:bg-(--color-accent-green)/10 h-28">
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
			{/* editable td */}

			{editable == false ? (
				<td
					className="p-10 text-(--color-accent-green) font-bold"
					onClick={() => setReadyToEdit(true)}
				>
					{readyToEdit ? (
						<div className="flex flex-col justify-center items-center relative">
							<input
								type="number"
								value={price}
								onChange={(e) => setPrice(Number(e.target.value))}
								onBlur={() => {
									if (price < 1000) setPrice(1000);
								}}
								min={1000}
								autoFocus
								className={`bg-(--color-accent-green)/20 rounded px-2 py-1 w-25 text-[10px] text-center outline-none transition-colors ${
									isPriceInvalid
										? "border-red-500 bg-red-50 text-red-700"
										: "border-(--color-accent-green) text-(--color-accent-green)"
								}`}
							/>
							{isPriceInvalid && (
								<span className="absolute -bottom-10 text-[10px] text-red-500 font-normal">
									حداقل قیمت ۱,۰۰۰ ریال
								</span>
							)}
						</div>
					) : (
						<span className="text-(--color-accent-green)">
							{faNumber(product.price).toLocaleString()} ریال
						</span>
					)}
				</td>
			) : (
				<td
					className="p-3 text-(--color-accent-green) font-bold"
					onClick={() => setReadyToEdit(true)}
				>
					{faNumber(product.price).toLocaleString()} ریال
				</td>
			)}

			{/* editable td */}
			{editable == false ? (
				<td className="p-3 relative" onClick={() => setReadyToEdit(true)}>
					<div className="flex flex-row justify-center items-center gap-1">
						{readyToEdit ? (
							<input
								type="number"
								value={stock}
								onChange={(e) => setStock(Number(e.target.value))}
								className="bg-(--color-accent-green)/20 rounded px-2 py-1 text-[10px] text-center w-10 outline-none transition-colors "
							/>
						) : (
							faNumber(product.stock)
						)}
						{/* to set confirm button after edit */}
						{readyToEdit && (
							<div className="h-10 rounded-md flex justify-center items-center gap-1 absolute top-0 left-10 text-gray-700">
								<span className="px-1 w-30 ">ذخیره تغییرات ؟</span>
								<button
									onClick={handleCancel}
									className="mx-1 p-2 cursor-pointer hover:scale-120"
								>
									✖
								</button>
								<button
									onClick={handleUpdate}
									className="mx-1 p-2 cursor-pointer hover:scale-120"
								>
									✔
								</button>
							</div>
						)}
					</div>
				</td>
			) : (
				<td className="p-3" onClick={() => setReadyToEdit(true)}>
					{faNumber(product.stock)}
				</td>
			)}

			<td className="p-3">{product.gender}</td>
			<td className="p-3">{faNumber(product.popularity)}</td>

			{/* to check if component is editable for Price and Quantity */}
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
			</td>
		</tr>
	);
}

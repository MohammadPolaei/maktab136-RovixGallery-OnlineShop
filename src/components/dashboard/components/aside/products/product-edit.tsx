import Modal from "@/components/base/modal";
import { ProductAddSchemaType } from "@/components/dashboard/utils/product-add-schema";
import { Product } from "@/types/product-data-type";
import { UseMutateFunction } from "@tanstack/react-query";
import ProductEditForm from "./product-edit-form";

type ProductEditType = {
	setEditSuccess: (val: boolean) => void;
	product: Product;
	open: boolean;
	setOpen: (val: boolean) => void;
	updateProduct: UseMutateFunction<
		Product,
		Error,
		{ id: string; data: ProductAddSchemaType }
	>;
	isUpdating: boolean | undefined;
	errorUpdating: Error | null;
};

export default function ProductEdit({
	setEditSuccess,
	product,
	open,
	setOpen,
	errorUpdating,
	isUpdating,
	updateProduct,
}: ProductEditType) {
	return (
		<Modal
			modalTitle={`ویرایش محصول - ${product.name}`}
			modalUsecaseType="form"
			open={open}
			setOpen={setOpen}
		>
			<ProductEditForm
				errorUpdating={errorUpdating}
				isUpdating={isUpdating}
				updateProduct={updateProduct}
				product={product}
				setEditSuccess={setEditSuccess}
				setOpen={setOpen}
			/>
		</Modal>
	);
}

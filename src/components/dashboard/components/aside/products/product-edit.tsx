import Modal from "@/components/base/modal";
import { ProductAddSchemaType } from "@/components/dashboard/utils/product-add-schema";
import ProductAddEditTabs from "@/components/shared/product-add-edit-tabs";
import { Product } from "@/types/product-data-type";
import { UseMutateFunction } from "@tanstack/react-query";
import { useState } from "react";
import ProductEditForm from "./product-edit-form";

type ProductEditType = {
	setEditSuccess: (val: boolean) => void;
	product: Product;
	open: boolean;
	setOpen: (val: boolean) => void;
	updateProduct: UseMutateFunction<
		void,
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
	const [tab, setTab] = useState<"main-info" | "product-spec" | "setting">(
		"main-info"
	);
	return (
		<Modal
			modalTitle={`ویرایش محصول - ${product.name}`}
			modalUsecaseType="form"
			open={open}
			setOpen={setOpen}
		>
			<ProductAddEditTabs setTab={setTab} tab={tab}>
				<ProductEditForm
					tab={tab}
					errorUpdating={errorUpdating}
					isUpdating={isUpdating}
					updateProduct={updateProduct}
					product={product}
					setEditSuccess={setEditSuccess}
					setOpen={setOpen}
				/>
			</ProductAddEditTabs>
		</Modal>
	);
}

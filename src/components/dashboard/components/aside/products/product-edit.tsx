import Modal from "@/components/base/modal";
import { Product } from "@/types/product-data-type";
import ProductEditForm from "./product-edit-form";

type ProductEditType = {
	setEditSuccess: (val: boolean) => void;
	product: Product;
	open: boolean;
	setOpen: (val: boolean) => void;
};

export default function ProductEdit({
	setEditSuccess,
	product,
	open,
	setOpen,
}: ProductEditType) {
	return (
		<Modal
			open={open}
			setOpen={setOpen}
			extraClasses="inset-[1%] md:inset-[12%]"
		>
			<ProductEditForm
				product={product}
				setEditSuccess={setEditSuccess}
				setOpen={setOpen}
			/>
		</Modal>
	);
}

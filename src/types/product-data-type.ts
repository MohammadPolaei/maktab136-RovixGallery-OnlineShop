import { ProductAddSchemaType } from "@/components/dashboard/utils/product-add-schema";
import { UseMutateFunction } from "@tanstack/react-query";

export interface Product {
	rating: number;
	numReviews: number;
	_id: string;
	name: string;
	description: string;
	price: number;
	brand: string;
	brandCountry: string;
	gender: string;
	material: string;
	color: string;
	dialColor: string;
	isAuthentic: boolean;
	stock: number;
	popularity: number;
	category: string;
	images: string[];
	isActive: boolean;
}
export interface ProductDataTable {
	editablePriceAndQuantity?: boolean;
	setEditSuccess: (val: boolean) => void;
	productData: Product[];
	deleteProduct?: (prodID: string) => void;
	errorDeleting?: Error | null;
	isDeleting?: boolean;
	updateProduct: UseMutateFunction<
		Product,
		Error,
		{ id: string; data: ProductAddSchemaType }
	>;
	isUpdating?: boolean;
	errorUpdating: Error | null;
	editable: boolean;
}

export interface TableRowPropsType {
	editablePriceAndQuantity?: boolean;
	setEditSuccess: (val: boolean) => void;
	editable: boolean;
	product: Product;
	deleteProduct?: (prodID: string) => void;
	errorDeleting?: Error | null;
	isDeleting?: boolean;
	updateProduct: UseMutateFunction<
		Product,
		Error,
		{ id: string; data: ProductAddSchemaType }
	>;
	isUpdating?: boolean;
	errorUpdating: Error | null;
}

import {
	BrandCountryEnum,
	BrandEnum,
	CategoryEnum,
	ColorEnum,
	DialColorEnum,
	GenderEnum,
	MaterialEnum,
	ProductAddSchemaType,
} from "@/components/dashboard/utils/product-add-schema";
import { UseMutateFunction } from "@tanstack/react-query";
import z from "zod";

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
	editSuccess: boolean;

	setEditSuccess: (val: boolean) => void;
	productData: Product[];
	deleteProduct?: (prodID: string) => void;
	errorDeleting?: Error | null;
	isDeleting?: boolean;
	updateProduct: UseMutateFunction<
		void,
		Error,
		{ id: string; data: ProductAddSchemaType }
	>;
	isUpdating?: boolean;
	errorUpdating: Error | null;
	editable: boolean;
}
export type ProductUpdateType = {
	price: number;
	stock: number;
};
type CategoryType = z.infer<typeof CategoryEnum>;
type BrandType = z.infer<typeof BrandEnum>;
type BrandCountryType = z.infer<typeof BrandCountryEnum>;
type GenderType = z.infer<typeof GenderEnum>;
type MaterialType = z.infer<typeof MaterialEnum>;
type ColorType = z.infer<typeof ColorEnum>;
type DialColorType = z.infer<typeof DialColorEnum>;

export const prepareProductForUpdate = (
	product: any,
	newPrice: number,
	newStock: number
): ProductAddSchemaType => {
	return {
		...product,
		price: newPrice,
		stock: newStock,
		category: product.category as CategoryType,
		brand: product.brand as BrandType,
		brandCountry: product.brandCountry as BrandCountryType,
		gender: product.gender as GenderType,
		material: product.material as MaterialType,
		color: product.color as ColorType,
		dialColor: product.dialColor as DialColorType,
		images: [] as unknown as File[], // بایپس کردن محدودیت فایل
	};
};

export interface TableRowPropsType {
	setEditSuccess: (val: boolean) => void;
	editable: boolean;
	product: Product;
	deleteProduct?: (prodID: string) => void;
	errorDeleting?: Error | null;
	isDeleting?: boolean;
	updateProduct: UseMutateFunction<
		void,
		Error,
		{ id: string; data: ProductAddSchemaType }
	>;
	isUpdating?: boolean;
	errorUpdating: Error | null;
}

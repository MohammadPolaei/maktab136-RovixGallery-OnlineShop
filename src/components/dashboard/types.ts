import { JSX } from "react";
import { Product } from "./../../types/product-data-type";

export type StatusCardDataType = {
	title: string;
	value: string;
	increasePercent: number;
	increaseText: string;
	icon: JSX.Element;
};
export interface StatCardProps {
	icon: React.ReactNode;
	title: string;
	value: string | number;
	increasePercent: number;
	increaseText: string;
}
export type CategorySales = {
	name: string;
	value: number;
};
export interface OrderType {
	_id: string;
	userName: string;
	createdAt: string;
	totalPrice: number;
	isDelivered: boolean;
}

export interface ProductDataTable {
	productData: Product[];
	editable: boolean;
}
export interface ProductFilters {
	search?: string;
	brand?: string;
	gender?: string;
	sort?: string;

	page?: number;
	limit?: number;
}

export interface ProductFiltersSet extends ProductFilters {
	setBrand: (input: string) => void;
	setGender: (input: string) => void;
	setSort: (input: string) => void;
	setStock: (input: string) => void;
}

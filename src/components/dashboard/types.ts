import { JSX } from "react";

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
	value: string | number | undefined;
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

export type AddProductType = {
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
};

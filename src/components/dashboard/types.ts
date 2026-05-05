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

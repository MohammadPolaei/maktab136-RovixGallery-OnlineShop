import React, { JSX } from "react";

// Navbar

export type NavbarSingleItemsType = {
	href: string;
	title: string;
	icon: JSX.Element | string;
};

// Inputs

export interface InputType {
	label: string;
	name: string;
	id?: string;
	placeholder?: string;
	register?: any;
}
export type ValidatedFormType = {
	children: React.ReactNode;
	handleSubmit: Function;
	onSubmit: (data: any) => void;
	formTitle: string;
	formDescription: string;
	loading: boolean;
};

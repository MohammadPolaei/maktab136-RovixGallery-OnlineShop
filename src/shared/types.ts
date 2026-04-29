import React from "react";

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

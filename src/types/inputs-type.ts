// Inputs

import { JSX } from "react";

export interface InputType {
	type?: "text" | "number" | "email";
	isSubmiting?: boolean;
	label?: string;
	name: string;
	id?: string;
	placeholder?: string;
	register?: any;
	value?: string | number;
	extraClasses?: string;
	inputExtraclasses?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ValidatedFormType = {
	titleLogo?: JSX.Element;
	submitButtonText: string;

	children: React.ReactNode;
	handleSubmit: Function;
	onSubmit: (data: any) => void;
	formTitle: string;
	formDescription: string;
	loading: boolean;
};

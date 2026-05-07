// Inputs

export interface InputType {
	label?: string;
	name: string;
	id?: string;
	placeholder?: string;
	register?: any;
	value?: string | number;
	extraClasses?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export type ValidatedFormType = {
	children: React.ReactNode;
	handleSubmit: Function;
	onSubmit: (data: any) => void;
	formTitle: string;
	formDescription: string;
	loading: boolean;
};

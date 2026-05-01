import { ValidatedFormType } from "../../types/types";
import SubmitButton from "../base/buttons";
import FormContainer from "./form-container";

export default function ValidatedForm({
	children,
	onSubmit,
	handleSubmit,
	formTitle,
	formDescription,
	loading,
}: ValidatedFormType) {
	return (
		<FormContainer>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full flex flex-col justify-evenly items-center gap-3"
			>
				<h1 className="text-xl text-(--color-dark-green) font-bold">
					{formTitle}
				</h1>
				<p className="text-sm text-(--color-subheading) hidden sm:inline">
					{formDescription}
				</p>

				{children}
				<SubmitButton disabaled={loading}>
					{loading ? "در حال بررسی . . ." : "ورود به حساب کاربری"}
				</SubmitButton>
			</form>
		</FormContainer>
	);
}

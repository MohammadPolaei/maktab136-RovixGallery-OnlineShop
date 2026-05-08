import { CrownLogin } from "@/assets/SVG/crown-login";
import { ValidatedFormType } from "@/types/inputs-type";
import SubmitButton from "../base/buttons";
import FormContainer from "./form-container";
import ShowDate from "./show-date";

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
				<div>
					<CrownLogin />
				</div>
				<h1 className="text-xl text-(--color-dark-green) font-bold">
					{formTitle}
				</h1>
				<p className="text-sm text-(--color-accent-green)/80 hidden sm:inline">
					{formDescription}
				</p>

				{children}
				<SubmitButton disabaled={loading}>
					{loading ? "در حال بررسی . . ." : "ورود به حساب کاربری"}
				</SubmitButton>
				<ShowDate extraClasses="text-black/60" />
			</form>
		</FormContainer>
	);
}

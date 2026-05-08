import { InputType } from "@/types/inputs-type";

export function TextInput(userInput: InputType) {
	return (
		<div
			className={`${
				userInput.extraClasses !== "" ? `${userInput.extraClasses}` : "w-full"
			}  flex flex-col gap-1`}
		>
			{userInput.label && (
				<label className="text-sm text-(--color-dark-green) font-semibold">
					{userInput.label}
				</label>
			)}
			<input
				className={`${
					userInput.extraClasses
						? "text-center bg-(--color-accent-green)/10"
						: ""
				} px-1 py-2 outline-0 border border-(--color-gold)/50 rounded-md text-sm text-(--color-subheading)`}
				type="text"
				name={userInput.name}
				{...(userInput.register || undefined)}
				id={userInput.id || undefined}
				value={userInput.value}
				onChange={userInput.onChange}
				placeholder={userInput.placeholder || undefined}
				required
			/>
		</div>
	);
}
export function PasswordInput(userInput: InputType) {
	return (
		<div className="w-full flex flex-col gap-1">
			<label className="text-sm text-(--color-dark-green) font-semibold">
				{userInput.label}
			</label>
			<input
				className="px-1 py-2 outline-0 border border-(--color-gold)/50 rounded-md text-sm text-(--color-subheading)"
				name={userInput.name}
				{...(userInput.register || undefined)}
				id={userInput.id || undefined}
				type="password"
				alt="password"
				placeholder={userInput.placeholder || undefined}
				required
			/>
		</div>
	);
}

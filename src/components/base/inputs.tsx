import { EyeIcon, EyeOffIcon } from "@/assets/SVG/auth/show-hide-password-icon";
import { InputType } from "@/types/inputs-type";
import { useState } from "react";

export function TextInput(userInput: InputType) {
	return (
		<div
			className={`${
				userInput.extraClasses !== "" ? `${userInput.extraClasses}` : "w-full"
			}  flex flex-col gap-1`}
		>
			{userInput.label && (
				<label className="text-[12px] md:text-[14px] text-(--color-dark-green) font-semibold">
					{userInput.label}
				</label>
			)}
			<input
				className={`${
					userInput.inputExtraclasses
						? userInput.inputExtraclasses
						: "pr-8 h-12 bg-(--color-accent-green)/60 text-(--color-bg)"
				}  px-1 py-2 outline-0 rounded-sm text-[10px] sm:text-sm `}
				type={`${userInput.type ? userInput.type : "text"}`}
				name={userInput.name}
				{...(userInput.register || undefined)}
				id={userInput.id || undefined}
				value={userInput.value}
				onChange={userInput.onChange}
				placeholder={userInput.placeholder || undefined}
				disabled={userInput.isSubmiting}
				onWheel={
					userInput.type === "number"
						? (e) => (e.currentTarget as HTMLInputElement).blur()
						: undefined
				}
			/>
		</div>
	);
}
export function PasswordInput(userInput: InputType) {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="w-full flex flex-col gap-1 relative">
			{userInput.label && (
				<label className="text-sm text-(--color-dark-green) font-semibold">
					{userInput.label}
				</label>
			)}
			<div className="absolute top-9 left-3">
				<div onClick={() => setToggle(!toggle)}>
					{toggle ? <EyeOffIcon /> : <EyeIcon />}
				</div>
			</div>
			<input
				className={`${
					userInput.inputExtraclasses
						? userInput.inputExtraclasses
						: "pr-8 h-12 bg-(--color-accent-green)/60 text-(--color-bg)"
				}  px-1 py-2 outline-0 rounded-sm text-[10px] sm:text-sm `}
				name={userInput.name}
				{...(userInput.register || undefined)}
				id={userInput.id || undefined}
				type={toggle ? "text" : "password"}
				alt="password"
				placeholder={userInput.placeholder || undefined}
				disabled={userInput.isSubmiting}
			/>
		</div>
	);
}

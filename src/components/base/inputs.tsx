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
				<label className="text-sm text-(--color-dark-green) font-semibold">
					{userInput.label}
				</label>
			)}
			<input
				className={`${
					userInput.extraClasses
						? "text-center bg-(--color-accent-green)/10"
						: ""
				} pr-8 px-1 py-2 outline-0 border border-(--color-gold)/50 rounded-md text-[10px] h-12 sm:text-sm text-(--color-subheading) bg-(--color-accent-green)/20 `}
				type="text"
				name={userInput.name}
				{...(userInput.register || undefined)}
				id={userInput.id || undefined}
				value={userInput.value}
				onChange={userInput.onChange}
				placeholder={userInput.placeholder || undefined}
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
				className="pr-8 px-1 py-2 outline-0 border border-(--color-gold)/50 rounded-md text-[10px] h-12 sm:text-sm text-(--color-subheading) bg-(--color-accent-green)/20 "
				name={userInput.name}
				{...(userInput.register || undefined)}
				id={userInput.id || undefined}
				type={toggle ? "text" : "password"}
				alt="password"
				placeholder={userInput.placeholder || undefined}
			/>
		</div>
	);
}

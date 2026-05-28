import React from "react";

type InputFieldProps = {
	label: string;
	name: string;
	value: string;
	placeholder?: string;
	type?: React.HTMLInputTypeAttribute;
	maxLength?: number;
	inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
	error?: string;
	onChange: (name: string, value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({
	label,
	name,
	value,
	placeholder,
	type = "text",
	maxLength,
	inputMode,
	error,
	onChange,
}) => {
	return (
		<div className="mb-4">
			<label className="mb-1 block text-sm font-medium text-slate-800">
				{label}
			</label>

			<input
				name={name}
				value={value}
				placeholder={placeholder}
				type={type}
				maxLength={maxLength}
				inputMode={inputMode}
				onChange={(e) => onChange(name, e.target.value)}
				className={[
					"w-full rounded-lg border px-3 py-2 text-sm outline-none transition",
					error
						? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
						: "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
				].join(" ")}
			/>

			{error && <p className="mt-1 text-xs text-red-600">{error}</p>}
		</div>
	);
};

export default InputField;

import React from "react";

type SelectFieldProps = {
	label: string;
	name: string;
	value: string;
	options: string[];
	error?: string;
	onChange: (name: string, value: string) => void;
};

const SelectField: React.FC<SelectFieldProps> = ({
	label,
	name,
	value,
	options,
	error,
	onChange,
}) => {
	return (
		<div className="mb-4 flex-1">
			<label className="mb-1 block text-sm font-medium text-slate-800">
				{label}
			</label>

			<select
				name={name}
				value={value}
				onChange={(e) => onChange(name, e.target.value)}
				className={[
					"w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition",
					error
						? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
						: "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
				].join(" ")}
			>
				<option value="">انتخاب کنید</option>
				{options.map((opt) => (
					<option key={opt} value={opt}>
						{opt}
					</option>
				))}
			</select>

			{error && <p className="mt-1 text-xs text-red-600">{error}</p>}
		</div>
	);
};

export default SelectField;

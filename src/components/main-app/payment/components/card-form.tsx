import React from "react";
import { PaymentFormData, ValidationErrors } from "../types";
import InputField from "./input-fields";
import SelectField from "./select-fields";

type Props = {
	formData: PaymentFormData;
	errors: ValidationErrors;
	onChange: (name: string, value: string) => void;
};

const months = Array.from({ length: 12 }, (_, i) =>
	String(i + 1).padStart(2, "0")
);
const years = Array.from({ length: 10 }, (_, i) =>
	String(new Date().getFullYear() + i)
);

const CardForm: React.FC<Props> = ({ formData, errors, onChange }) => {
	return (
		<div>
			<InputField
				label="شماره کارت"
				name="cardNumber"
				value={formData.cardNumber}
				placeholder="1234567890123456"
				inputMode="numeric"
				maxLength={16}
				error={errors.cardNumber}
				onChange={onChange}
			/>

			<InputField
				label="نام دارنده کارت"
				name="cardHolder"
				value={formData.cardHolder}
				placeholder="مثلاً علی رضایی"
				maxLength={50}
				error={errors.cardHolder}
				onChange={onChange}
			/>

			<div className="flex gap-3">
				<SelectField
					label="ماه انقضا"
					name="expiryMonth"
					value={formData.expiryMonth}
					options={months}
					error={errors.expiryMonth}
					onChange={onChange}
				/>

				<SelectField
					label="سال انقضا"
					name="expiryYear"
					value={formData.expiryYear}
					options={years}
					error={errors.expiryYear}
					onChange={onChange}
				/>
			</div>

			<InputField
				label="CVV2"
				name="cvv"
				value={formData.cvv}
				placeholder="123"
				inputMode="numeric"
				maxLength={4}
				error={errors.cvv}
				onChange={onChange}
			/>
		</div>
	);
};

export default CardForm;

export type PaymentFormData = {
	cardNumber: string;
	cardHolder: string;
	expiryMonth: string;
	expiryYear: string;
	cvv: string;
};

export type ValidationErrors = Partial<Record<keyof PaymentFormData, string>>;

export type PaymentStatus = "idle" | "processing" | "success" | "error";

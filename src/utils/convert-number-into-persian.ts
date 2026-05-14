export const faNumber = (num: string | number) =>
	new Intl.NumberFormat("fa-IR").format(Number(num));

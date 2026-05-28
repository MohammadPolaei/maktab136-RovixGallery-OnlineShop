export const faNumber = (num: string | number) =>
	new Intl.NumberFormat("fa-IR").format(Number(num));

export const faNumberSimple = (num: number | string): string => {
	return new Intl.NumberFormat("fa-IR", { useGrouping: false }).format(
		Number(num)
	);
};

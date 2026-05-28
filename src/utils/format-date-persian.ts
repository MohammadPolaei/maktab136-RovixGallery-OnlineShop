export const formatCartDate = (isoDate: string): string => {
	const date = new Date(isoDate);

	return new Intl.DateTimeFormat("fa-IR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		calendar: "persian",
	}).format(date);
};

"use client";

export default function ShowDate() {
	const date = new Date();

	// جداگانه گرفتن هر بخش
	const weekday = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
		weekday: "long",
	}).format(date);

	const day = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
		day: "numeric",
	}).format(date);

	const month = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
		month: "long",
	}).format(date);

	const year = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
		year: "numeric",
	}).format(date);

	const finalDate = `${weekday} ${day} ${month} ${year}`;

	return (
		<span dir="rtl" className="text-[8px] md:text-[10px] text-(--color-bg)/80">
			{finalDate}
		</span>
	);
}

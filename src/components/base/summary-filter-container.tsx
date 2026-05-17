export default function SummaryFilterContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<details className="group w-full border border-(--color-dark-green)/10 rounded-sm p-2 px-2 bg-white shadow shadow-black/5">
			<summary className="cursor-pointer font-medium text-(--color-dark-green) flex items-center justify-between transition-all ease-in-out duration-300">
				<span>اعمال فیلترها</span>
				<span className="transition-transform group-open:rotate-180">⌃</span>
			</summary>
			<div className="w-full max-h-screen pb-40 flex flex-col md:flex-row justify-between items-center gap-2 p-3">
				{children}
			</div>
		</details>
	);
}

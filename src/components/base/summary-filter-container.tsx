export default function SummaryFilterContainer({
	useCase,
	children,
}: {
	useCase: "Dashboard" | "main-site";
	children: React.ReactNode;
}) {
	return (
		<details className=" w-full border border-(--color-dark-green)/10 rounded-sm p-2 px-2 bg-white shadow shadow-black/5">
			<summary className="cursor-pointer font-medium text-(--color-dark-green) flex items-center justify-between transition-all ease-in-out duration-300">
				<span>اعمال فیلترها</span>
				<span className="transition-transform">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#000"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="m6 9 6 6 6-6" />
					</svg>
				</span>
			</summary>
			<div
				className={`${
					useCase == "main-site" ? "pb-40" : ""
				} w-full max-h-screen flex flex-col md:flex-row justify-between items-center gap-2 p-3`}
			>
				{children}
			</div>
		</details>
	);
}

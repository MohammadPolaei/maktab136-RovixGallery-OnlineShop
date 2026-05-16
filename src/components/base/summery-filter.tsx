export default function SummeryFilter({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-2">
			<details className="flex flex-col">
				<summary className="flex items-center justify-between cursor-pointer list-none font-bold text-gray-800 pb-2">
					<h3 className="text-[10px] font-bold text-gray-700">{title}</h3>

					<span className="transition-transform duration-300 group-open:rotate-180">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="m6 9 6 6 6-6" />
						</svg>
					</span>
				</summary>
				{children}
			</details>
		</div>
	);
}

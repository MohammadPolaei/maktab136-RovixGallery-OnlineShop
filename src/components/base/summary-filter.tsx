export default function SummaryFilter({
	title,
	icon,
	children,
}: {
	title: string;
	icon: any;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-2">
			<details className="group flex flex-col">
				<summary className="flex items-center justify-between cursor-pointer list-none font-bold text-gray-800 pb-2">
					<div className="w-full flex items-center justify-start gap-1">
						{icon}
						<h3 className="text-[10px] font-bold text-(--color-accent-green)">
							{title}
						</h3>
					</div>

					<span className="transition-transform duration-300 group-open:rotate-180 pl-2.5">
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

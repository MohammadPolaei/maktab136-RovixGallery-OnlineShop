export default function ProductCardSkeleton() {
	return (
		<div className="flex flex-col w-full max-w-70 overflow-hidden rounded-sm bg-white p-3 shadow-sm ring-1 ring-slate-100 animate-pulse">
			{/* image */}
			<div className="w-full aspect-4/5 rounded-sm bg-neutral-200" />

			{/* content */}
			<div className="mt-4 flex flex-col items-center gap-3 w-full">
				{/* category */}
				<div className="h-2 w-16 rounded bg-neutral-200" />

				{/* title */}
				<div className="flex flex-col gap-1 w-full items-center">
					<div className="h-3 w-24 rounded bg-neutral-200" />
					<div className="h-3 w-16 rounded bg-neutral-200" />
				</div>

				{/* rating */}
				<div className="flex gap-1 mt-1">
					{Array.from({ length: 5 }).map((_, i) => (
						<div key={i} className="h-2 w-2 rounded-full bg-neutral-200" />
					))}
				</div>

				{/* price */}
				<div className="mt-2 h-4 w-20 rounded bg-neutral-300" />
			</div>
		</div>
	);
}

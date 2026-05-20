export default function ProductCardMinimalSkeleton() {
	return (
		<div className="flex flex-col w-30 sm:w-35 md:w-40 rounded-sm bg-white p-2 shadow-sm ring-1 ring-slate-100 animate-pulse">
			{/* image */}
			<div className="w-full aspect-4/5 bg-neutral-200 rounded-sm" />

			{/* content */}
			<div className="mt-3 flex flex-col gap-2 items-center w-full">
				{/* brand */}
				<div className="h-2 w-10 bg-neutral-200 rounded" />

				{/* name */}
				<div className="h-3 w-16 bg-neutral-200 rounded" />

				{/* rating */}
				<div className="flex gap-1 mt-1">
					{Array.from({ length: 5 }).map((_, i) => (
						<div key={i} className="w-2 h-2 bg-neutral-200 rounded-full" />
					))}
				</div>

				{/* price */}
				<div className="h-3 w-12 bg-neutral-300 rounded mt-1" />
			</div>
		</div>
	);
}

export default function CartItemCardSkeleton() {
	return (
		<div className="w-full bg-white rounded-sm py-5 px-3 md:px-10 relative flex flex-col lg:flex-row justify-evenly items-start md:items-center gap-5">
			{/* Image Skeleton */}
			<div className="w-full flex-1">
				<div className="rounded-md w-30 lg:w-full mt-10 md:mt-0 aspect-square bg-gray-200 animate-pulse" />
			</div>

			{/* Info and Actions Skeleton */}
			<div className="w-full flex-4 flex flex-col justify-between md:justify-center items-start gap-5">
				{/* Top section: Title, Brand and Dial color */}
				<div className="flex-1 flex flex-col justify-between w-full h-full md:justify-center items-start gap-2 border-b border-b-black/10 pb-5">
					{/* Title */}
					<div className="h-5 w-48 md:w-64 bg-gray-200 rounded animate-pulse" />

					{/* Brand */}
					<div className="flex items-center gap-1 mt-1">
						<div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
						<div className="h-4 w-16 bg-gray-200 rounded-sm animate-pulse" />
					</div>

					{/* Dial Color */}
					<div className="flex items-center gap-2 mt-1">
						<div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
						<div className="h-3 w-14 bg-gray-200 rounded animate-pulse" />
						<div className="flex items-center gap-1">
							<div className="h-3 w-10 bg-gray-200 rounded animate-pulse" />
							<div className="w-4 h-4 rounded-full bg-gray-200 animate-pulse" />
						</div>
					</div>
				</div>

				{/* Bottom section: Prices and Cart Add/Remove */}
				<div className="w-full flex-1 flex flex-col lg:flex-row justify-between items-center gap-2">
					{/* Unit Price */}
					<div className="flex justify-between items-center gap-3 min-w-47 w-full lg:w-auto">
						<div className="flex items-center gap-1">
							<div className="hidden md:block w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
							<div className="h-3.5 w-12 bg-gray-200 rounded animate-pulse" />
						</div>
						<div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
					</div>

					{/* Add to Cart Button Mock */}
					<div className="w-full lg:w-auto flex flex-col justify-between items-center py-2">
						<div className="w-28 h-8 bg-gray-200 rounded-md animate-pulse" />
					</div>

					{/* Total Price */}
					<div className="flex justify-between lg:justify-center items-center gap-2 min-w-50 w-full lg:w-auto">
						<div className="h-3.5 w-10 bg-gray-200 rounded animate-pulse" />
						<div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
					</div>
				</div>
			</div>

			{/* Absolute actions on the top left (Fav, Delete) */}
			<div className="absolute top-12 left-5 md:top-10 md:left-10 flex flex-col justify-center items-end gap-3">
				<div className="flex flex-col justify-center items-center gap-3">
					{/* Favorite Button skeleton */}
					<div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse" />

					{/* Delete Button skeleton */}
					<div className="w-6.5 h-6.5 bg-gray-200 rounded-full animate-pulse" />
				</div>
			</div>
		</div>
	);
}

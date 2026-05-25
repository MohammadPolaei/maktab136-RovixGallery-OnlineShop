export default function CartItemSkeletonCard() {
	return (
		<div className="w-full bg-white text-[10px] rounded-sm py-5 px-3 md:px-10 relative flex flex-col md:flex-row justify-evenly items-start md:items-center gap-5">
			<div className="w-full flex-1 bg-gray-400 animate-pulse"></div>
			<div className="w-full flex-4 flex flex-col justify-between md:justify-center items-start gap-5">
				<div className="flex-1 flex flex-col justify-between w-full h-full md:justify-center items-start gap-2 border-b border-b-black/20 md:border-0 pb-5 md:pb-0">
					<div className="text-[10px] md:text-[16px] font-semibold"></div>
					<div className="flex items-center gap-1 bg-gray-200 animate-pulse"></div>
					<div className="flex items-center gap-2 bg-gray-200 animate-pulse"></div>
				</div>

				<div className="w-full flex-1 flex flex-col md:flex-row justify-between items-center gap-2 bg-gray-200 animate-pulse"></div>
			</div>
			<div className="absolute top-15 left-5 md:top-15 md:left-10 flex flex-col justify-center items-end gap-3"></div>
		</div>
	);
}

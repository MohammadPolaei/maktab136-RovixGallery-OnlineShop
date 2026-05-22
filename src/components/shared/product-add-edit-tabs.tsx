export default function ProductAddEditTabs({
	tab,
	setTab,
	children,
}: {
	tab: "main-info" | "product-spec" | "setting";
	setTab: (tab: "main-info" | "product-spec" | "setting") => void;
	children: React.ReactNode;
}) {
	return (
		<div className="w-full flex flex-col justify-center items-center relative">
			<div className="w-full flex-1 sticky top-12 flex flex-row justify-center items-center bg-neutral-200 z-100 px-0 md:px-6">
				<button
					onClick={() => setTab("main-info")}
					className={`${
						tab == "main-info"
							? "bg-(--color-accent-green) text-white"
							: "bg-neutral-200"
					} w-full py-3 border border-black/10 cursor-pointer active:bg-neutral-300 transition-all duration-500 ease-in-out text-[10px] md:text-[12px] lg:text-[14px] rounded-r-sm`}
				>
					اطلاعات اصلی محصول
				</button>
				<button
					onClick={() => setTab("product-spec")}
					className={`${
						tab == "product-spec"
							? "bg-(--color-accent-green) text-white"
							: "bg-neutral-200"
					} w-full py-3 border border-black/10 cursor-pointer active:bg-neutral-300 transition-all duration-500 ease-in-out text-[10px] md:text-[12px] lg:text-[14px]`}
				>
					مشخصات محصول
				</button>
				<button
					onClick={() => setTab("setting")}
					className={`${
						tab == "setting"
							? "bg-(--color-accent-green) text-white"
							: "bg-neutral-200"
					} w-full py-3 border border-black/10 cursor-pointer active:bg-neutral-300 transition-all duration-500 ease-in-out text-[10px] md:text-[12px] lg:text-[14px] rounded-l-sm`}
				>
					تنظیمات
				</button>
			</div>
			<div className="w-full overflow-auto flex-4 h-150">{children}</div>
		</div>
	);
}

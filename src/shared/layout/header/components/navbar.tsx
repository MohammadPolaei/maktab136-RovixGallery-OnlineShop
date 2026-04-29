import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-full rovix-bg-darkest border-t border-[#D8C27A]/30">
			<div className="max-w-7xl mx-auto items-center justify-center py-1 rovix-text-light text-sm hidden lg:flex lg:gap-10">
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						صفحه اصلی
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						محصولات
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						دسته بندی ها
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						ساعت مردانه
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						ساعت زنانه
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						برندها
					</div>
				</Link>

				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						درباره ما
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						تماس با ما
					</div>
				</Link>
			</div>
		</nav>
	);
}

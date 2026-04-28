import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-full rovix-bg-darkest border-t border-[#D8C27A]/30">
			<div className="max-w-7xl mx-auto flex items-center justify-center gap-10 py-3 rovix-text-light text-sm transition-all ease-in-out duration-500">
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					صفحه اصلی
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					{" "}
					ساعت مردانه
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					{" "}
					ساعت زنانه
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					{" "}
					برندها
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					{" "}
					کالکشن‌ها
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					{" "}
					لایسوری
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					{" "}
					اکسسوری
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					{" "}
					درباره ما{" "}
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					{" "}
					تماس با ما
				</Link>
			</div>
		</nav>
	);
}

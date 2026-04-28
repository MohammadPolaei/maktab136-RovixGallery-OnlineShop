import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-full bg-[#0C1B14] border-t border-[#D8C27A]/30">
			<div className="max-w-7xl mx-auto flex items-center justify-center gap-10 py-3 text-[#f4f4f4] text-sm">
				<Link href={"/"} className="hover:text-white transition">
					صفحه اصلی
				</Link>
				<Link href={"/"} className="hover:text-white transition">
					ساعت مردانه
				</Link>
				<Link href={"/"} className="hover:text-white transition">
					ساعت زنانه
				</Link>
				<Link href={"/"} className="hover:text-white transition">
					برندها
				</Link>
				<Link href={"/"} className="hover:text-white transition">
					کالکشن‌ها
				</Link>
				<Link href={"/"} className="hover:text-white transition">
					لایسوری
				</Link>
				<Link href={"/"} className="hover:text-white transition">
					اکسسوری
				</Link>
				<Link href={"/"} className="hover:text-white transition">
					پیشنهاد روز
				</Link>
				<Link href={"/"} className="hover:text-white transition">
					تماس با ما
				</Link>
			</div>
		</nav>
	);
}

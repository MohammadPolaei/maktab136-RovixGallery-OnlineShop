import AboutUsIcon from "@/assets/SVG/navbar-icons/about-us-icon";
import BrandsIcon from "@/assets/SVG/navbar-icons/brands-icon";
import CategoriesIcon from "@/assets/SVG/navbar-icons/categories-icon";
import ContactUsIcon from "@/assets/SVG/navbar-icons/contact-us-icon";
import HomePageIcon from "@/assets/SVG/navbar-icons/home-page-icon";
import MenWatchIcon from "@/assets/SVG/navbar-icons/men-watch-icon";
import ProductsIcon from "@/assets/SVG/navbar-icons/products-icon";
import WomenWatchIcon from "@/assets/SVG/navbar-icons/women-watch-icon";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-full rovix-bg-darkest backdrop-blur-sm border-t border-[#D8C27A]/30">
			<div className="max-w-7xl mx-auto items-center justify-center py-1 rovix-text-light text-[10px] hidden lg:flex lg:gap-10">
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						<HomePageIcon />
						صفحه اصلی
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						<ProductsIcon />
						محصولات
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						<CategoriesIcon />
						دسته بندی ها
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						<MenWatchIcon />
						ساعت مردانه
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						<WomenWatchIcon />
						ساعت زنانه
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						<BrandsIcon />
						برندها
					</div>
				</Link>

				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						<AboutUsIcon />
						درباره ما
					</div>
				</Link>
				<Link
					href={"/"}
					className="rovix-link transition-all ease-in-out duration-500"
				>
					<div className="px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#0f3b2e] transition-all ease-in-out duration-1000">
						<ContactUsIcon />
						تماس با ما
					</div>
				</Link>
			</div>
		</nav>
	);
}

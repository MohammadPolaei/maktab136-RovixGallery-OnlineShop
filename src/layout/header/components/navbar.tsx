import AboutUsIcon from "@/assets/SVG/navbar-icons/about-us-icon";
import BrandsIcon from "@/assets/SVG/navbar-icons/brands-icon";
import CategoriesIcon from "@/assets/SVG/navbar-icons/categories-icon";
import ContactUsIcon from "@/assets/SVG/navbar-icons/contact-us-icon";
import HomePageIcon from "@/assets/SVG/navbar-icons/home-page-icon";
import MenWatchIcon from "@/assets/SVG/navbar-icons/men-watch-icon";
import ProductsIcon from "@/assets/SVG/navbar-icons/products-icon";
import WomenWatchIcon from "@/assets/SVG/navbar-icons/women-watch-icon";
import NavbarSingleItem from "./navbar-single-item";

export default function Navbar() {
	return (
		<nav className="w-full rovix-bg-darkest backdrop-blur-sm border-t border-[#D8C27A]/30">
			<div className="max-w-7xl mx-auto flex flex-row items-center justify-center py-1 rovix-text-light text-[10px] lg:gap-10">
				<NavbarSingleItem href="/" icon={<HomePageIcon />} title="صفحه اصلی" />
				<NavbarSingleItem href="/" icon={<ProductsIcon />} title="محصولات" />
				<NavbarSingleItem
					href="/"
					icon={<CategoriesIcon />}
					title="دسته بندی ها"
				/>
				<NavbarSingleItem
					href="/"
					icon={<MenWatchIcon />}
					title="ساعت مردانه"
				/>
				<NavbarSingleItem
					href="/"
					icon={<WomenWatchIcon />}
					title="ساعت زنانه"
				/>
				<NavbarSingleItem href="/" icon={<BrandsIcon />} title="برندها" />
				<NavbarSingleItem href="/" icon={<AboutUsIcon />} title="درباره ما" />
				<NavbarSingleItem
					href="/"
					icon={<ContactUsIcon />}
					title="تماس با ما"
				/>
			</div>
		</nav>
	);
}

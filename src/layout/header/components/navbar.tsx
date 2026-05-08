"use client";
import AboutUsIcon from "@/assets/SVG/navbar-icons/about-us-icon";
import BrandsIcon from "@/assets/SVG/navbar-icons/brands-icon";
import CategoriesIcon from "@/assets/SVG/navbar-icons/categories-icon";
import ContactUsIcon from "@/assets/SVG/navbar-icons/contact-us-icon";
import HomePageIcon from "@/assets/SVG/navbar-icons/home-page-icon";
import MenWatchIcon from "@/assets/SVG/navbar-icons/men-watch-icon";
import ProductsIcon from "@/assets/SVG/navbar-icons/products-icon";
import WomenWatchIcon from "@/assets/SVG/navbar-icons/women-watch-icon";
import { LinkItemsType } from "@/types/header-type";
import { usePathname } from "next/navigation";
import NavbarSingleItem from "./navbar-single-item";

const navbarLinkItems: LinkItemsType[] = [
	{ id: 1, title: "صفحه اصلی", href: "/", icon: <HomePageIcon /> },
	{ id: 2, title: "محصولات", href: "/products", icon: <ProductsIcon /> },
	{
		id: 3,
		title: "دسته بندی ها",
		href: "/products/cat",
		icon: <CategoriesIcon />,
	},
	{
		id: 4,
		title: "ساعت مردانه",
		href: "/products/filtered",
		icon: <MenWatchIcon />,
	},
	{
		id: 5,
		title: "ساعت زنانه",
		href: "/products/filtered",
		icon: <WomenWatchIcon />,
	},
	{ id: 6, title: "برندها", href: "/products/filter", icon: <BrandsIcon /> },
	{ id: 7, title: "درباره ما", href: "/about-us", icon: <AboutUsIcon /> },
	{ id: 8, title: "تماس با ما", href: "/contact-us", icon: <ContactUsIcon /> },
];

export default function Navbar() {
	const pathname = usePathname();

	return (
		<div
			id="main-header"
			className="w-full h-12 flex flex-col justify-center items-center rovix-bg-darkest backdrop-blur-sm border-t border-[#D8C27A]/30 transition-all duration-400 ease-in-out"
		>
			<nav className="max-w-7xl mx-auto flex flex-row items-center justify-center py-1 rovix-text-light text-[10px] lg:gap-10">
				{navbarLinkItems.map((item) => {
					const isActive =
						item.href === "/"
							? pathname === "/"
							: pathname.startsWith(item.href);
					return (
						<NavbarSingleItem
							key={item.id}
							extraClasses={
								isActive ? "text-(--color-gold) scale-110 origin-center" : ""
							}
							href={item.href}
							icon={item.icon}
							title={item.title}
						/>
					);
				})}
			</nav>
		</div>
	);
}

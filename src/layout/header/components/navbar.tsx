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
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarSingleItem from "./navbar-single-item";

const navbarLinkItems: LinkItemsType[] = [
	{
		id: 1,
		title: "صفحه اصلی",
		href: "/",
		icon: <HomePageIcon />,
		modal: false,
	},
	{
		id: 2,
		title: "محصولات",
		href: "/products",
		icon: <ProductsIcon />,
		modal: false,
	},
	{
		id: 3,
		title: "دسته بندی ها",
		href: "/products/cat",
		icon: <CategoriesIcon />,
		modal: true,
		childData: (
			<div className="w-full flex flex-col justify-start items-start gap-3 text-[12px] p-3 text-white/80">
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?gender=مردانه"}
				>
					ساعت مردانه
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?gender=زنانه"}
				>
					ساعت زنانه
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brandCountry=ژاپن"}
				>
					ساخت ژاپن
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brandCountry=سوئیس"}
				>
					ساخت سوئیس
				</Link>
			</div>
		),
	},
	{
		id: 4,
		title: "ساعت مردانه",
		href: "/products?gender=مردانه",
		icon: <MenWatchIcon />,
		modal: false,
	},
	{
		id: 5,
		title: "ساعت زنانه",
		href: "/products?gender=زنانه",
		icon: <WomenWatchIcon />,
		modal: false,
	},
	{
		id: 6,
		title: "برندها",
		href: "/products/filter",
		icon: <BrandsIcon />,
		modal: true,
		childData: (
			<div className="w-full flex flex-col justify-start items-start gap-3 text-[12px] p-3 text-white/80">
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brand=Rolex"}
				>
					Rolex
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brand=Omega"}
				>
					Omega
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brand=Casio"}
				>
					Casio
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brand=Citizen"}
				>
					Citizen
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brand=Seiko"}
				>
					Seiko
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brand=Orient"}
				>
					Orient
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brand=Hamilton"}
				>
					Hamilton
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brand=Longines"}
				>
					Longines
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brand=Tissot"}
				>
					Tissot
				</Link>
				<Link
					className="p-1 bg-white/5 hover:bg-white/10 w-full origin-center hover:scale-110 transition-all duration-500 ease-in-out"
					href={"/products?brand=Tag Heuer"}
				>
					Tag Heuer
				</Link>
			</div>
		),
	},
	{
		id: 7,
		title: "درباره ما",
		href: "/about-us",
		icon: <AboutUsIcon />,
		modal: false,
	},
	{
		id: 8,
		title: "تماس با ما",
		href: "/contact-us",
		icon: <ContactUsIcon />,
		modal: false,
	},
];

export default function Navbar() {
	const pathname = usePathname();

	return (
		<div
			id="main-header"
			className="w-full h-12 flex flex-col justify-center items-center rovix-bg-darkest backdrop-blur-sm border-t border-[#D8C27A]/30 transition-all duration-400 ease-in-out z-100"
		>
			<nav className="max-w-7xl mx-auto flex flex-row items-center justify-center py-1 rovix-text-light text-[10px] lg:gap-10">
				{navbarLinkItems.map((item) => {
					const isActive =
						item.href === "/"
							? pathname === "/"
							: pathname.startsWith(item.href);
					return (
						<NavbarSingleItem
							childData={item.childData}
							hasModal={item.modal}
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

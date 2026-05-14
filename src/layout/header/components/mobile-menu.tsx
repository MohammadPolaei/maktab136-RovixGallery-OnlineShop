"use client";

import CartIconMobile from "@/assets/SVG/mobile-menu/cart-icon-mobile";
import CategoriesIconMobile from "@/assets/SVG/mobile-menu/categories-icon-mobile";
import HomePageIconMobile from "@/assets/SVG/mobile-menu/home-page-icon-mobile";
import ProductsIconMobile from "@/assets/SVG/mobile-menu/products-icon-mobile";
import UserProfileMobile from "@/assets/SVG/mobile-menu/user-profile-mobile";
import { LinkItemsType } from "@/types/header-type";
import { usePathname } from "next/navigation";
import MobileMenuSingleItem from "./mobile-menu-single-item";

export default function MobileMenu() {
	const mobileMenuLinkItems: LinkItemsType[] = [
		{ id: 1, title: "صفحه اصلی", href: "/", icon: <HomePageIconMobile /> },
		{
			id: 2,
			title: "محصولات",
			href: "/products",
			icon: <ProductsIconMobile />,
		},
		{ id: 3, title: "سبد خرید", href: "/cart", icon: <CartIconMobile /> },
		{
			id: 4,
			title: "دسته بندی ها",
			href: "/products/filter",
			icon: <CategoriesIconMobile />,
		},
		{
			id: 5,
			title: "پروفایل",
			href: "/user-profile",
			icon: <UserProfileMobile />,
		},
	];
	const pathname = usePathname();

	return (
		<div className="w-full h-15 flex flex-row justify-between items-center px-6 backdrop-blur-[5px] bg-radial from-(--color-super-dark-green)/90 to-(--color-darkest) rovix-text-gold rounded-t-lg z-500">
			{mobileMenuLinkItems.map((item) => {
				const isActive =
					item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

				return (
					<MobileMenuSingleItem
						extraClasses={
							isActive
								? "py-3 mb-8 z-10 text-white bg-radial from-(--color-gold)/30 to-(--color-gold-dark)/50 rounded-xl backdrop-blur-2xl"
								: ""
						}
						key={item.id}
						href={item.href}
						icon={item.icon}
						title={item.title}
					/>
				);
			})}
		</div>
	);
}

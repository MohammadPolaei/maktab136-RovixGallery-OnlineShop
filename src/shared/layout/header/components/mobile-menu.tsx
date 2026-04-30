"use client";

import CartIconMobile from "@/assets/SVG/mobile-menu/cart-icon-mobile";
import CategoriesIconMobile from "@/assets/SVG/mobile-menu/categories-icon-mobile";
import HomePageIconMobile from "@/assets/SVG/mobile-menu/home-page-icon-mobile";
import ProductsIconMobile from "@/assets/SVG/mobile-menu/products-icon-mobile";
import UserProfileMobile from "@/assets/SVG/mobile-menu/user-profile-mobile";
import { useState } from "react";
import MobileMenuSingleItem from "./mobile-menu-single-item";

export default function MobileMenu() {
	const links = [
		{ id: 1, title: "صفحه اصلی", href: "/", icon: <HomePageIconMobile /> },
		{ id: 2, title: "محصولات", href: "/", icon: <ProductsIconMobile /> },
		{ id: 3, title: "سبد خرید", href: "/", icon: <CartIconMobile /> },
		{ id: 4, title: "دسته بندی ها", href: "/", icon: <CategoriesIconMobile /> },
		{ id: 5, title: "پروفایل", href: "/", icon: <UserProfileMobile /> },
	];
	const [activeTitle, setActive] = useState("صفحه اصلی");
	return (
		<div className="w-full h-15 flex flex-row justify-between items-center px-6 backdrop-blur-[5px] bg-radial from-(--color-super-dark-green)/90 to-(--color-darkest) rovix-text-gold rounded-t-lg">
			{links.map((item) => {
				return (
					<MobileMenuSingleItem
						setActive={setActive}
						active={activeTitle}
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

"use client";

import CartIconMobile from "@/assets/SVG/mobile-menu/cart-icon-mobile";
import CategoriesIconMobile from "@/assets/SVG/mobile-menu/categories-icon-mobile";
import HomePageIconMobile from "@/assets/SVG/mobile-menu/home-page-icon-mobile";
import ProductsIconMobile from "@/assets/SVG/mobile-menu/products-icon-mobile";
import UserProfileMobile from "@/assets/SVG/mobile-menu/user-profile-mobile";
import LogoutButton from "@/components/base/logut-button";
import { LinkItemsType } from "@/types/header-type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenuSingleItem from "./mobile-menu-single-item";

export default function MobileMenu() {
	const mobileMenuLinkItems: LinkItemsType[] = [
		{
			id: 1,
			title: "صفحه اصلی",
			href: "/",
			icon: <HomePageIconMobile />,
			modal: false,
		},
		{
			id: 2,
			title: "محصولات",
			href: "/products",
			icon: <ProductsIconMobile />,
			modal: false,
		},
		{
			id: 3,
			title: "سبد خرید",
			href: "/cart",
			icon: <CartIconMobile />,
			modal: false,
		},
		{
			id: 4,
			title: "دسته بندی ها",
			href: "/products/filter",
			icon: <CategoriesIconMobile />,
			modal: true,
			childData: (
				<div className="w-full flex flex-col justify-start items-start gap-3 text-[12px] px-3 text-white/80">
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
			id: 5,
			title: "پروفایل",
			href: "/user-profile",
			icon: <UserProfileMobile />,
			modal: true,
			childData: (
				<div className="flex flex-col items-center text-xs">
					<Link
						className="w-full p-3 rounded-sm flex items-center justify-center gap-2 text-[10px] text-center cursor-pointer mx-2 my-1 bg-white/8  hover:bg-white/20 active:text-white origin-center transition-all ease-in-out duration-500"
						href="/user-profile"
					>
						پروفایل
					</Link>
					<Link
						className="w-full p-3 rounded-sm flex items-center justify-center gap-2 text-[10px] text-center cursor-pointer mx-2 my-1 bg-white/8  hover:bg-white/20 active:text-white origin-center transition-all ease-in-out duration-500"
						href="/user-profile/orders"
					>
						سفارش‌ها
					</Link>
					<div className="my-1 h-px bg-white" />
					<div className="w-full flex flex-col justify-center items-center">
						<LogoutButton />
					</div>
				</div>
			),
		},
	];
	const pathname = usePathname();

	return (
		<div className="w-full h-15 flex flex-row justify-between items-center px-6 backdrop-blur-[5px] bg-(--color-super-dark-green) rovix-text-gold rounded-t-sm z-500">
			{mobileMenuLinkItems.map((item) => {
				const isActive =
					item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

				return (
					<MobileMenuSingleItem
						childData={item.childData}
						hasModal={item.modal}
						extraClasses={
							isActive
								? "py-3 mb-8 text-white bg-radial from-(--color-gold)/30 to-(--color-gold-dark)/50 rounded-sm backdrop-blur-2xl"
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

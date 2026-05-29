"use client";
import CartIcon from "@/assets/SVG/cart-icon";
import UserProfile from "@/assets/SVG/user-profile";
import LogoutButton from "@/components/base/logut-button";
import SearchInput from "@/components/base/search-input";
import { useCartStore } from "@/components/main-app/cart/hooks/use-cart-CRUD";
import ShowDate from "@/components/shared/show-date";
import Link from "next/link";
import { RadixNavabrMenu } from "./radix-navbar-menu";

export default function HeaderTop() {
	const { cart } = useCartStore();
	return (
		<div className="w-full rovix-bg-darkest rovix-text-gold">
			<div className="max-w-7xl mx-auto flex items-center justify-evenly py-2 px-2">
				{/* Search */}
				<div className="flex items-center justify-center w-full md:w-100">
					<SearchInput
						name="search"
						extraClasses="rounded-sm md:ml-10 lg:ml-0"
					/>
				</div>
				{/* Logo */}
				<div className="flex-col h-10 justify-center items-center transition-all duration-300 ease-in-out hidden md:flex">
					<div className="logo"></div>
				</div>

				{/* Right Section */}
				<div className="text-[10px] flex items-center justify-between gap-6 md:w-100">
					<div className="items-center cursor-pointer hidden md:flex">
						<RadixNavabrMenu
							side="bottom"
							align="center"
							sideOffset={10}
							showArrow={false}
							closeOnInteract
							trigger={
								<button className="rovix-link flex items-center text-center transition-all duration-500 ease-in-out cursor-pointer">
									<UserProfile />
									حساب کاربری
								</button>
							}
							contentClassName="w-64 p-3 rovix-bg-darkest rounded-sm border border-[rgba(255,215,0,0.25)] text-(--color-gold) z-600"
						>
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
						</RadixNavabrMenu>
					</div>

					<div className="=items-center cursor-pointer relative hidden md:flex">
						<Link
							href={"/cart"}
							className="rovix-link flex items-center transition-all ease-in-out duration-500 text-center "
						>
							<CartIcon />
							سبد خرید
							<span className="absolute -top-3 right-0 rovix-bg-gold text-black text-[10px] px-1 rounded-full">
								{cart ? cart.data.items.length : 0}
							</span>
						</Link>
					</div>
					<div className="w-35 text-left hidden md:inline">
						<ShowDate extraClasses="text-(--color-gold)" />
					</div>
				</div>
			</div>
		</div>
	);
}

"use client";
import CartIcon from "@/assets/SVG/cart-icon";
import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import UserProfile from "@/assets/SVG/user-profile";
import LogoutButton from "@/components/base/logut-button";
import SearchInput from "@/components/base/search-input";
import { useCartStore } from "@/components/main-app/cart/hooks/use-cart-CRUD";
import ShowDate from "@/components/shared/show-date";
import { useGetProducts } from "@/hooks/use-get-data";
import { Product } from "@/types/product-data-type";
import { faNumberSimple } from "@/utils/convert-number-into-persian";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { RadixNavabrMenu } from "./radix-navbar-menu";
import RadixSearchPopover from "./radix-search-popover";

export default function HeaderTop() {
	const { cart } = useCartStore();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const sessionCheck = async () => {
			const res = await fetch("/api/auth/auth-check", {
				method: "GET",
				credentials: "include",
				cache: "no-store",
			});
			return await res.json();
		};
		sessionCheck()
			.catch((err) => toast.error(err.message))
			.then((r) => setIsLoggedIn(r.isLoggedIn));
	}, [pathname]);

	// searching
	const [openSearchMenu, setOpenSearchMenu] = useState<boolean>(false);
	const { products, totalProductsCount, searchData, search, setSearchData } =
		useGetProducts();

	return (
		<div className="w-full rovix-bg-darkest rovix-text-gold">
			<div className="max-w-7xl mx-auto flex items-center justify-evenly py-2 px-2">
				{/* Search */}
				<div className="flex items-center justify-center w-full md:w-100">
					<RadixSearchPopover
						open={openSearchMenu}
						onOpenChange={setOpenSearchMenu}
						side="bottom"
						align="center"
						sideOffset={10}
						showArrow={false}
						anchor={
							<div className="w-full">
								<SearchInput
									value={searchData}
									name="search"
									extraClasses="rounded-sm md:ml-10 lg:ml-0"
									onChange={(e) => {
										const value = e.target.value;
										if (!value) {
											setSearchData("");
										} else {
											setSearchData(value);
										}
										setOpenSearchMenu(value.trim().length > 0);
									}}
								/>
							</div>
						}
						contentClassName="w-[320px] md:w-[420px] lg:w-[520px] p-3  bg-(--color-darkest)/90 backdrop-blur-[8px] rounded-sm text-(--color-gold)"
					>
						<div className="w-full">
							<div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-[12px]">
								<span>تعداد محصولات در نتایج جستجو</span>
								<span>{faNumberSimple(totalProductsCount)}</span>
							</div>

							<div className="max-h-80 overflow-y-auto">
								{search == "" ? (
									<RovixLuxuryLoader />
								) : products?.length ? (
									<div className="flex flex-col gap-2">
										{products.map((product: Product) => (
											<Link
												key={product._id}
												href={`/products/${product._id}`}
												onClick={() => setOpenSearchMenu(false)}
												className="block rounded-sm p-2 bg-white/5 hover:bg-white/10 transition-all duration-300"
											>
												<div className="flex items-center justify-between gap-3">
													<div className="w-10">
														<Image
															alt={product.name}
															src={product.images[0]}
															width={200}
															height={200}
															unoptimized
															className="object-cover rounded-md"
														/>
													</div>
													<span className="text-xs line-clamp-1 text-left">
														{product.name}
													</span>
												</div>
											</Link>
										))}
									</div>
								) : searchData.trim().length > 0 ? (
									<div className="text-xs text-center py-4 text-white/70">
										محصولی پیدا نشد
									</div>
								) : null}
							</div>
						</div>
					</RadixSearchPopover>
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
								<button className="rovix-link flex items-center gap-2 text-center transition-all duration-500 ease-in-out cursor-pointer">
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

								{isLoggedIn ? (
									<div className="w-full flex flex-col justify-center items-center">
										<LogoutButton setIsLogged={setIsLoggedIn} />
									</div>
								) : (
									<div className="w-full flex flex-col justify-center items-center">
										<button
											onClick={() => router.push("/auth/login")}
											className="w-full px-3 py-2 rounded-sm flex items-center justify-center gap-2 text-[10px] text-center cursor-pointer m-2 bg-[#213b0f]  hover:bg-green-600/40 active:text-white origin-center transition-all ease-in-out duration-500"
										>
											ورود به حساب
										</button>
									</div>
								)}
							</div>
						</RadixNavabrMenu>
					</div>

					<div className="=items-center cursor-pointer relative hidden md:flex">
						<Link
							href={"/cart"}
							className="rovix-link flex items-center gap-2 transition-all ease-in-out duration-500 text-center "
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

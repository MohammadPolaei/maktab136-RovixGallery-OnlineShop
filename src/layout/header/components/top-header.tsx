import CartIcon from "@/assets/SVG/cart-icon";
import UserProfile from "@/assets/SVG/user-profile";
import SearchInput from "@/components/base/search-input";
import ShowDate from "@/components/shared/show-date";
import Link from "next/link";

export default function HeaderTop() {
	return (
		<div className="w-full rovix-bg-darkest rovix-text-gold">
			<div className="max-w-7xl mx-auto flex items-center justify-evenly py-2 px-2">
				{/* Search */}
				<div className="flex items-center justify-center md:w-100">
					<SearchInput name="search" />
				</div>
				{/* Logo */}
				<div className="flex-col h-10 justify-center items-center transition-all duration-300 ease-in-out hidden md:flex">
					<div className="logo"></div>
				</div>

				{/* Right Section */}
				<div className="text-[10px] flex items-center justify-between gap-6 md:w-100">
					<div className="items-center cursor-pointer hidden md:flex">
						<UserProfile />
						<Link
							href={"/user-profile"}
							className="rovix-link transition-all ease-in-out duration-500 hidden text-center md:w-15 md:inline"
						>
							حساب کاربری
						</Link>
					</div>

					<div className="flex items-center cursor-pointer relative">
						<CartIcon />
						<Link
							href={"/cart"}
							className="rovix-link transition-all ease-in-out duration-500 hidden text-center md:w-15 md:inline"
						>
							سبد خرید
						</Link>
						<span className="absolute -top-1 right-0 rovix-bg-gold text-black text-xs px-1 rounded-full">
							0
						</span>
					</div>
					<div className="w-35 text-center hidden md:inline">
						<ShowDate extraClasses="text-(--color-gold)" />
					</div>
				</div>
			</div>
		</div>
	);
}

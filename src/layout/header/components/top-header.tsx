import CartIcon from "@/assets/SVG/cart-icon";
import UserProfile from "@/assets/SVG/user-profile";
import SearchInput from "@/components/base/search-input";

export default function HeaderTop() {
	return (
		<div className="w-full rovix-bg-darkest rovix-text-gold">
			<div className="max-w-7xl mx-auto flex items-center justify-evenly py-2 px-2">
				{/* Search */}
				<SearchInput name="search" />
				{/* Logo */}
				<div className="flex-col h-10 justify-center items-center transition-all duration-300 ease-in-out hidden md:flex">
					<div className="logo"></div>
				</div>

				{/* Right Section */}
				<div className="text-[10px] flex items-center justify-evenly gap-6 md:w-80">
					<div className="items-center gap-2 cursor-pointer hidden md:flex">
						<UserProfile />
						<span className="rovix-link transition-all ease-in-out duration-500 hidden md:inline">
							حساب کاربری
						</span>
					</div>

					<div className="flex items-center gap-2 cursor-pointer relative">
						<CartIcon />
						<span className="rovix-link transition-all ease-in-out duration-500 hidden md:inline">
							سبد خرید
						</span>
						<span className="absolute -top-1 right-0 rovix-bg-gold text-black text-xs px-1 rounded-full">
							0
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

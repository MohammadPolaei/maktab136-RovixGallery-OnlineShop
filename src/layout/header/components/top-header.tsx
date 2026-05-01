import CartIcon from "@/assets/SVG/cart-icon";
import SearchIcon from "@/assets/SVG/search-icon";
import UserProfile from "@/assets/SVG/user-profile";

export default function HeaderTop() {
	return (
		<div className="w-full rovix-bg-darkest rovix-text-gold">
			<div className="max-w-7xl mx-auto flex items-center justify-evenly py-2 px-2">
				{/* Search */}
				<div className="relative w-full flex flex-row items-center h-10 md:w-80">
					<input
						className="w-full h-8 ml-10 border border-[#0000] bg-[#0f3b2e] text-[10px] text-right text-[#f4f4f4] rounded-full py-2 px-4 pr-10 outline-none placeholder-[#f4f4f4aa] placeholder:px-2 hover:border hover:border-[#c9a667] transition-all ease-in-out duration-500 md:ml-0"
						placeholder="جستجوی ساعت، برند یا مدل..."
					/>
					<div className="absolute right-4 top-2">
						<SearchIcon />
					</div>
				</div>
				{/* Logo */}
				<div
					id="main-header"
					className="flex-col h-20 justify-center items-center transition-all duration-300 ease-in-out hidden md:flex"
				>
					<div className="logo"></div>
				</div>

				{/* Right Section */}
				<div className="text-[12px] flex items-center justify-evenly gap-6 md:w-80">
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

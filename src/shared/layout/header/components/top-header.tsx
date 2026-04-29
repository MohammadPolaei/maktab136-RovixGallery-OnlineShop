import CartIcon from "@/assets/SVG/cart-icon";
import SearchIcon from "@/assets/SVG/search-icon";
import UserProfile from "@/assets/SVG/user-profile";

export default function HeaderTop() {
	return (
		<div className="w-full rovix-bg-super-dark-green text-[#D8C27A]">
			<div className="max-w-7xl mx-auto flex items-center justify-evenly py-2 px-2">
				{/* Right Section */}
				<div className="flex items-center justify-evenly gap-6 md:w-35 lg:w-80">
					<div className="flex items-center gap-2 cursor-pointer">
						<UserProfile />
						<span className="text-sm rovix-link transition-all ease-in-out duration-500 hidden lg:inline">
							حساب کاربری
						</span>
					</div>

					<div className="flex items-center gap-2 cursor-pointer relative">
						<CartIcon />
						<span className="text-sm rovix-link transition-all ease-in-out duration-500 hidden lg:inline">
							سبد خرید
						</span>
						<span className="absolute -top-1 right-0 rovix-bg-gold text-black text-xs px-1 rounded-full">
							0
						</span>
					</div>
				</div>
				{/* Logo */}
				<div className="flex-col items-center text-[#D8C27A] hidden sm:flex">
					<div className="logo"></div>
					{/* <Image alt="rovix" src={RovixLogo} width={200} height={200} /> */}
				</div>
				{/* Search */}
				<div className="relative w-20 h-10 md:w-35 lg:w-80">
					<input
						className="w-full h-10 border border-[#0000] bg-[#0f3b2e] text-[10px] text-right text-[#f4f4f4] rounded-full py-2 px-4 pr-10 outline-none placeholder-[#f4f4f4aa] placeholder:px-2 hover:border hover:border-[#c9a667] transition-all ease-in-out duration-500 inline sm:hidden md:inline"
						placeholder="جستجوی ساعت، برند یا مدل..."
					/>
					<div className="absolute right-4 top-2 sm:right-0 md:right-4 md:top-2">
						<SearchIcon />
					</div>
				</div>
			</div>
		</div>
	);
}

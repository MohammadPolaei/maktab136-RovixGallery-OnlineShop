import CartIcon from "@/assets/SVG/cart-icon";
import SearchIcon from "@/assets/SVG/search-icon";
import UserProfile from "@/assets/SVG/user-profile";

export default function HeaderTop() {
	return (
		<div className="w-full bg-[#0C1B14] text-[#D8C27A]">
			<div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
				{/* Left Section */}
				<div className="flex items-center gap-6">
					<div className="flex items-center gap-2 cursor-pointer">
						<UserProfile />
						<span className="text-sm text-[#f4f4f4]">حساب کاربری</span>
					</div>

					<div className="flex items-center gap-2 cursor-pointer relative">
						<CartIcon />
						<span className="text-sm text-[#f4f4f4]">سبد خرید</span>
						<span className="absolute -top-1 right-0 bg-[#D8C27A] text-black text-xs px-1 rounded-full">
							0
						</span>
					</div>
				</div>

				{/* Logo */}
				<div className="flex flex-col items-center text-[#D8C27A]">
					LOGO HERE
					<h1 className="text-xl mt-1 font-semibold">ROVIXGALLERY</h1>
					<p className="text-xs tracking-widest">LUXURY WATCHES</p>
				</div>

				{/* Search */}
				<div className="w-80 relative">
					<input
						className="w-full bg-transparent border border-[#D8C27A] text-sm text-right text-[#f4f4f4] rounded-full py-2 px-4 pr-10 outline-none placeholder-[#f4f4f4aa]"
						placeholder="جستجوی ساعت، برند یا مدل..."
					/>
					<div className="absolute right-4 top-2">
						<SearchIcon />
					</div>
				</div>
			</div>
		</div>
	);
}

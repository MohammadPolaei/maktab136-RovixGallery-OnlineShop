import CartIconMobile from "@/assets/SVG/mobile-menu/cart-icon-mobile";
import CategoriesIconMobile from "@/assets/SVG/mobile-menu/categories-icon-mobile";
import HomePageIconMobile from "@/assets/SVG/mobile-menu/home-page-icon-mobile";
import ProductsIconMobile from "@/assets/SVG/mobile-menu/products-icon-mobile";
import UserProfileMobile from "@/assets/SVG/mobile-menu/user-profile-mobile";
import Link from "next/link";

export default function MobileMenu() {
	return (
		<div className="w-full flex flex-row justify-between items-center px-6 py-4 backdrop-blur-[5px] bg-radial from-(--color-super-dark-green)/90 to-(--color-darkest) rovix-text-gold rounded-t-xl">
			<Link
				title="صفحه اصلی"
				className="text-[8px] flex flex-col justify-center items-center gap-1 active:text-white active:scale-120 origin-center transition-all ease-in-out duration-500"
				href={"/"}
			>
				<HomePageIconMobile />
				صفحه اصلی
			</Link>
			<Link
				title="محصولات"
				className="text-[8px] flex flex-col justify-center items-center gap-1 active:text-white active:scale-120 origin-center transition-all ease-in-out duration-500"
				href={"/"}
			>
				<ProductsIconMobile />
				محصولات
			</Link>
			<Link
				title="دسته بندی ها"
				className="text-[8px] flex flex-col justify-center items-center gap-1 active:text-white active:scale-120 origin-center transition-all ease-in-out duration-500"
				href={"/"}
			>
				<CategoriesIconMobile />
				دسته بندی ها
			</Link>
			<Link
				title="سبد خرید"
				className="text-[8px] flex flex-col justify-center items-center gap-1 active:text-white active:scale-120 origin-center transition-all ease-in-out duration-500"
				href={"/"}
			>
				<CartIconMobile />
				سبد خرید
			</Link>
			<Link
				title="پروفایل"
				className="text-[8px] flex flex-col justify-center items-center gap-1 active:text-white active:scale-120 origin-center transition-all ease-in-out duration-500"
				href={"/"}
			>
				<UserProfileMobile />
				پروفایل
			</Link>
		</div>
	);
}

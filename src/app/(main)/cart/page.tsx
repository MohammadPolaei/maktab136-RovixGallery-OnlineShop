import CartList from "@/components/main-app/cart/components/cart-list";
import CartPriceInfo from "@/components/main-app/cart/components/cart-price-info";
import SpecialOffers from "@/components/main-app/cart/components/special-offers";

export default function Page() {
	return (
		<section className="w-screen md:max-w-7xl md:min-w-5xl px-2 md:px-10 flex flex-col justify-start items-center gap-3">
			<div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] h-full">
				<CartPriceInfo />
				<CartList />
			</div>
			<div className="w-full">
				<SpecialOffers />
			</div>
		</section>
	);
}

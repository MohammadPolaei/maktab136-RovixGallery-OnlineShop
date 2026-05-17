import BestSellers from "@/components/main-app/home/components/best-sellers";
import Brands from "@/components/main-app/home/components/brands";
import Categories from "@/components/main-app/home/components/categories";
import FeaturedCollection from "@/components/main-app/home/components/featured-collection";
import HeroSlider from "@/components/main-app/home/components/hero";
import SelectedCategories from "@/components/main-app/home/components/selected-categories";
import SpecialOffers from "@/components/main-app/home/components/special-offers";

export default function HomePage() {
	return (
		<section className="min-h-full flex flex-col justify-start items-center -mt-1">
			<HeroSlider />
			<div className="container max-w-7xl min-h-screen flex flex-col justify-start items-center">
				<Categories />
				<SpecialOffers />
				<FeaturedCollection />
				<BestSellers />
				<Brands />
				<SelectedCategories />
			</div>
		</section>
	);
}

import BestSellers from "@/components/main-app/home/components/best-sellers";
import Brands from "@/components/main-app/home/components/brands";
import Categories from "@/components/main-app/home/components/categories";
import FeaturedCollection from "@/components/main-app/home/components/featured-collection";
import HeroSlider from "@/components/main-app/home/components/hero";
import SelectedCategories from "@/components/main-app/home/components/selected-categories";
import SpecialOffers from "@/components/main-app/home/components/special-offers";
import SpecialProducts from "@/components/main-app/home/components/special-products";
import SupportSection from "@/components/main-app/home/components/support-section";
import { getProductsSSR } from "@/services/get-products-by-params";
import { Product } from "@/types/product-data-type";
import { buildQuery } from "@/utils/build-query";

export default async function HomePage({
	searchParams,
}: {
	searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
	const resolvedSearchParams = await searchParams;

	const query = buildQuery(resolvedSearchParams);

	const { data, pages, page, total } = await getProductsSSR(query);

	// reSetting products image by currecting URL
	const products = data.map((prod: Product) => ({
		...prod,
		images: prod.images.map(
			(img: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`
		),
	}));
	// Offers
	const specialOffers = products.filter(
		(p: Product) => (p.brand == "Rolex" || "Casio") && p.popularity > 70
	);
	// Rovix Products
	const specialProducts = products.filter((p: Product) => p);

	return (
		<section className="min-h-full flex flex-col justify-start items-center -mt-1">
			<div className="bg-(--color-darkest) md:h-28 min-w-full absolute top-0" />
			<HeroSlider />
			<div className="container max-w-7xl min-h-screen flex flex-col justify-start items-center">
				<Categories />
				<SpecialOffers specialProducts={specialProducts} />
				<SpecialProducts products={specialOffers} />
				<SupportSection />
				<FeaturedCollection />
				<BestSellers />
				<Brands />
				<SelectedCategories />
			</div>
		</section>
	);
}

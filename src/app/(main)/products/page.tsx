import discountBanner from "@/assets/img/discount-banner.webp";
import SectionTitle from "@/components/base/section-title";
import SummaryFilterContainer from "@/components/base/summary-filter-container";
import ProductsBlog from "@/components/main-app/blog/products-blog";
import ProductsGridSkeleton from "@/components/main-app/products-list/components/grid-skeleton";
import ProductsListWrapper from "@/components/main-app/products-list/components/product-list-wrapper";
import ProductsSliderWrapper from "@/components/main-app/products-list/components/product-slider-wrapper";
import ProductSliderSkeleton from "@/components/shared/product-slider-skeleton";
import ProductsFilterUsingParams from "@/components/shared/products-filter-using-params";
import { buildQuery } from "@/utils/build-query";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
	title: "محصولات رویکس - RovixGallery",
	description: "بهترین ساعت‌ها و اکسسوری‌های لوکس.",
	openGraph: {
		type: "website",
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};
export default async function ProductsPage({
	searchParams,
}: {
	searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
	const resolvedSearchParams = await searchParams;

	const query = buildQuery(resolvedSearchParams);

	return (
		<div className="container px-5">
			<div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_5fr] justify-center items-start gap-5">
				<section className="max-w-80 md:min-h-full mt-1 relative">
					<div className="min-h-full sticky top-29.5 hidden md:flex">
						{/* Desktop */}
						<ProductsFilterUsingParams mobileResponsive={false} />
					</div>

					{/* Mobile */}
					<div className="w-full fixed top-14 right-0 left-0 z-200 md:hidden">
						<SummaryFilterContainer useCase="main-site">
							<ProductsFilterUsingParams mobileResponsive />
						</SummaryFilterContainer>
					</div>
				</section>

				<section className="flex flex-col justify-center items-center gap-3 w-full">
					<Suspense
						fallback={<ProductsGridSkeleton key={JSON.stringify(query)} />}
					>
						<ProductsListWrapper query={query} />
					</Suspense>
				</section>
				<section className="max-w-full px-15 md:px-0 md:max-w-80 md:min-h-full mt-1 relative flex flex-col justify-start items-center">
					<div className="sticky min-h-full top-25 mt-0">
						<Link href={"/products/discounts"} target="_blank">
							<Image
								alt="banner"
								src={discountBanner}
								width={1000}
								height={1000}
								className="rounded-sm"
							/>
						</Link>
					</div>
				</section>
				<section className="flex flex-col justify-center items-center">
					<article className="rounded-sm">
						<ProductsBlog />
					</article>
				</section>
			</div>
			<section className="flex flex-col justify-center items-center w-full">
				<SectionTitle title="محبوبترین ها" />
				<Suspense
					fallback={<ProductSliderSkeleton key={JSON.stringify(query)} />}
				>
					<ProductsSliderWrapper query={query} />
				</Suspense>
			</section>
		</div>
	);
}

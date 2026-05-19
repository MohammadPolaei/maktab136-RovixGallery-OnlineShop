import discountBanner from "@/assets/img/discount-banner.webp";
import SectionTitle from "@/components/base/section-title";
import SummaryFilterContainer from "@/components/base/summary-filter-container";
import ProductsBlog from "@/components/main-app/blog/products-blog";
import ProductsList from "@/components/main-app/products-list/components/products-list";
import ProductPagination from "@/components/shared/product-pagination";
import { ProductSliderContainer } from "@/components/shared/product-slider-container";
import ProductsFilterUsingParams from "@/components/shared/products-filter-using-params";
import { getProductsSSR } from "@/services/get-products-by-params";
import { Product } from "@/types/product-data-type";
import { buildQuery } from "@/utils/build-query";
import Image from "next/image";
import Link from "next/link";

export default async function ProductsPage({
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

	const brandsList = data.map((p: Product) => p.brand);
	const mostPopularProducts = products.filter(
		(p: Product) => p.popularity > 40
	);

	return (
		<div className="container px-5">
			<div className="grid grid-cols-1 md:grid-cols-[1fr_5fr] justify-center items-start gap-5">
				<section className="max-w-80 md:min-h-full mt-1 relative">
					<div className="min-h-full sticky top-28.75 hidden md:flex">
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

				<section className="flex flex-col justify-center items-center gap-3">
					<ProductsList
						totalProducts={total}
						currentPage={page}
						products={products}
					/>
					<div className="w-full bg-white py-2 rounded-sm">
						<ProductPagination totalPages={pages} currentPage={page} />
					</div>
				</section>
				<section className="max-w-80 md:min-h-full mt-1 relative">
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
				<ProductSliderContainer product={mostPopularProducts} key={page} />
			</section>
		</div>
	);
}

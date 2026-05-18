import discountBanner from "@/assets/img/discount-banner.webp";
import SummaryFilterContainer from "@/components/base/summary-filter-container";
import ProductsBlog from "@/components/main-app/blog/products-blog";
import ProductsList from "@/components/main-app/products-list/components/products-list";
import ProductPagination from "@/components/shared/product-pagination";
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

	return (
		<main className="container px-5">
			<div className="flex flex-col md:flex-row justify-center items-start gap-5">
				<section className="w-full md:flex-1 md:min-h-screen mt-7">
					<div className="rounded-sm w-full hidden md:flex flex-col justify-items-start items-center">
						{/* Desktop */}
						<div className="w-full h-565 hidden md:block space-y-5 relative">
							<div className="min-h-2/3 relative">
								<ProductsFilterUsingParams mobileResponsive={false} />
							</div>
							<div className="relative min-h-1/3">
								<div className="sticky top-24 mt-6">
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
							</div>
						</div>
					</div>
					{/* Mobile */}
					<div className="w-full fixed top-14 right-0 left-0 z-200 md:hidden">
						<SummaryFilterContainer useCase="main-site">
							<ProductsFilterUsingParams mobileResponsive />
						</SummaryFilterContainer>
					</div>
				</section>
				<section className="flex-5 flex flex-col justify-center items-center gap-3">
					<ProductsList
						totalProducts={total}
						currentPage={page}
						products={products}
					/>
					<div className="w-full bg-white py-2 rounded-sm">
						<ProductPagination totalPages={pages} currentPage={page} />
					</div>
					<article className="h-screen overflow-y-auto rounded-sm">
						<ProductsBlog />
					</article>
				</section>
			</div>
		</main>
	);
}

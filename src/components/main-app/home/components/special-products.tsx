"use client";

import specialProductBackground from "@/assets/img/special-products/special-product.webp";
import SectionTitle from "@/components/base/section-title";
import AboutModal from "@/components/shared/about-modal";
import { ProductCardMinimal } from "@/components/shared/product-card-minimal";
import { Product } from "@/types/product-data-type";

export default function SpecialProducts({ products }: { products: Product[] }) {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<SectionTitle title="پیشنهاد Rovix" />
			<div
				className="w-full flex flex-row justify-end items-center gap-4 py-10 px-5 rounded-sm"
				style={{
					backgroundImage: `url(${specialProductBackground.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					minHeight: "320px",
				}}
			>
				<div>
					<AboutModal
						title="پیشنهادات ویژه Rovix Gallery"
						description="گلچینی از خاص‌ترین و پرفروش‌ترین ساعت‌های لوکس، انتخاب‌شده با دقت برای سلیقه‌هایی که به دنبال کیفیت، اصالت و طراحی ماندگار هستند. این مجموعه محدود، تنها شامل محصولاتی است که از نظر زیبایی، دوام و ارزش خرید در بالاترین سطح قرار می‌گیرند"
					/>{" "}
				</div>
				<div className="flex flex-row justify-center items-center gap-1">
					{products.map((p) => (
						<ProductCardMinimal
							brand={p.brand}
							images={p.images}
							name={p.name}
							price={p.price}
							key={p._id}
							rating={p.popularity / 10}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

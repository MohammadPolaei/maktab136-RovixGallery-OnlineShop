import japanCatImage from "@/assets/img/categories/categories-japan.webp";
import menCatImage from "@/assets/img/categories/categories-men.webp";
import switcherlandCatImage from "@/assets/img/categories/categories-switcherland.webp";
import womenCatImage from "@/assets/img/categories/categories-women.webp";
import SectionTitle from "@/components/base/section-title";
import Image from "next/image";
import Link from "next/link";

const categoriesList = [
	{ title: "مردانه", href: "/products?gender=مردانه", image: menCatImage },
	{ title: "زنانه", href: "/products?gender=زنانه", image: womenCatImage },
	{
		title: "ساخت سوئیس",
		href: "/products?brandCountry=سوئیس",
		image: switcherlandCatImage,
	},
	{
		title: "ساخت ژاپن",
		href: "/products?brandCountry=ژاپن",
		image: japanCatImage,
	},
];

export default function Categories() {
	return (
		<div className="w-full px-3 md:px-0">
			<SectionTitle
				title={`
				
					دسته‌ بندی‌ ها
				`}
			/>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
				{categoriesList.map((cat) => (
					<Link
						key={cat.title}
						href={cat.href}
						className="group relative overflow-hidden rounded-sm cursor-pointer"
					>
						<Image
							unoptimized
							src={cat.image}
							alt={cat.title}
							width={600}
							height={450}
							className="object-cover w-full h-full transition-all duration-700 ease-out group-hover:scale-[1.1] group-hover:brightness-120"
						/>

						<div className="absolute inset-0 bg-linear-to-t from-black/70 group-hover:from-black to-transparent opacity-60 group-hover:opacity-100 group-hover:backdrop-blur-[5px] transition-all duration-500 ease-in-out" />

						<span className="absolute bottom-4 inset-x-0 text-center text-white/90 text-lg font-medium group-hover:mb-[25%] tracking-wide group-hover:text-white transition-all duration-500">
							{cat.title}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
}

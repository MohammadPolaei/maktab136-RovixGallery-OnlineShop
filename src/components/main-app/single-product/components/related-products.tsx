import { Product } from "@/types/product-data-type";
import Link from "next/link";

interface RelatedProductsProps {
	brand: string;
}

export default async function RelatedProducts({ brand }: RelatedProductsProps) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/product?brand=${brand}&sort=popularity`,
		{
			next: { revalidate: 60 },
		}
	);
	const data = await res.json();
	const products: Product[] = data.data.data;
	const resolvedProductsWithCorrectImages = products.map((p) => {
		return (p = {
			...p,
			images: p.images.map(
				(img: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`
			),
		});
	});

	return (
		<div className="mt-10">
			<h3 className="text-[12px] rovix-text-gold mb-4">محصولات مرتبط</h3>
			<div className="grid md:grid-cols-4 gap-6">
				{resolvedProductsWithCorrectImages.map((p) => (
					<Link key={p._id} href={`/products/${p._id}`} title={p.name}>
						<div className="rovix-bg-super-dark-green rounded-lg p-4 hover:rovix-bg-dark-green transition">
							<img
								src={p.images[0]}
								alt={p.name}
								className="w-full h-40 object-cover rounded"
							/>
							<h4 className="text-[10px] mt-2 rovix-text-gold">{p.name}</h4>
							<p className="text-[10px] text-gray-300">
								{p.price.toLocaleString()} تومان
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

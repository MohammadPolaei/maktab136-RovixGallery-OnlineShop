"use client";

import { Product } from "@/types/product-data-type";
import { useState } from "react";

interface ActionsProps {
	product: Product;
}

export default function ProductActions({ product }: ActionsProps) {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="mt-4">
			<div className="flex items-center gap-2">
				<input
					type="number"
					value={quantity}
					min={1}
					className="w-16 text-center bg-transparent border rovix-border-gold rounded text-[10px] text-white"
					onChange={(e) => setQuantity(+e.target.value)}
				/>
				<button className="rovix-bg-gold text-black text-[10px] px-4 py-2 rounded hover:rovix-bg-gold-dark transition">
					افزودن به سبد خرید
				</button>
				<button className="rovix-bg-super-dark-green text-[10px] px-4 py-2 rounded border border-gold hover:rovix-bg-dark-green transition">
					افزودن به علاقه‌مندی‌ها
				</button>
			</div>
		</div>
	);
}

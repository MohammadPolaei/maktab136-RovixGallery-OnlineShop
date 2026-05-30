"use client";

import CartIconButton from "@/assets/SVG/cart-icon-button";
import { FavoriteFilled } from "@/assets/SVG/product-card/favorite-icon";
import { Product } from "@/types/product-data-type";
import { faNumber } from "@/utils/convert-number-into-persian";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import AddToCartSingleProduct from "../../../shared/add-to-cart-single-product";
import { useCartStore } from "../../cart/hooks/use-cart-CRUD";

interface ActionsProps {
	product: Product;
}

export default function ProductActions({ product }: ActionsProps) {
	const { addItem, isLoading, error } = useCartStore();
	const [singleProdQuantityValue, setSingleProdQuantityValue] = useState(1);
	// cart info
	const { cart } = useCartStore();

	let thisProductInCart = cart?.data.items.find(
		(prod) => prod.product._id == product._id
	);
	useEffect(() => {
		thisProductInCart = cart?.data.items.find(
			(prod) => prod.product._id == product._id
		);
	}, [cart]);

	// handle add product
	const handleAddToCart = async (id: string, quantity: number) => {
		if (
			quantity - thisProductInCart!.quantity == 0 ||
			quantity - thisProductInCart!.quantity < 0
		) {
			toast.error("حداقل 1 عدد به سبد خرید اضافه شود");
		} else {
			await addItem({
				productId: id,
				quantity: quantity - thisProductInCart!.quantity,
			});
		}
		if (isLoading) {
			toast.loading("در حال افزودن محصول به سبد خرید");
		}
		if (error) {
			toast.error(`خطا در افزودن محصول به سبد خرید ${error.message}`);
		}
	};
	return (
		<div className="w-full mt-4 flex flex-col justify-start items-center gap-3">
			<div className="w-full flex flex-col lg:flex-row justify-between items-center">
				<AddToCartSingleProduct
					product={product}
					setSingleProdQuantityValue={setSingleProdQuantityValue}
					usageType="single-product"
				/>
				<div className="flex items-center gap-1">
					<p>{"نظرات کاربران"}</p>
					<div className="flex items-center">
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className={`h-4 w-4 ${
									i < Math.floor(product.popularity / 20)
										? "text-amber-400 fill-current"
										: "text-slate-200 fill-current"
								}`}
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
					</div>
					<span className="text-[12px] text-white/50">
						{faNumber((product.popularity / 20).toFixed(1))}
					</span>
				</div>
			</div>
			<div className="w-full">
				{product.stock == 0 ? (
					<button className="w-full py-3 mx-auto bg-white/20 hover:bg-(--color-gold)/20 text-[10px] text-white font-bold hover:text-(--color-gold) cursor-pointer rounded-sm flex justify-center items-center gap-1 transition-all duration-500 ease-in-out">
						<span>به من اطلاع بده !</span>
					</button>
				) : (
					<button
						disabled={singleProdQuantityValue == 0}
						onClick={() =>
							handleAddToCart(product._id, singleProdQuantityValue)
						}
						className="w-full py-3 mx-auto bg-radial from-[#e7d494] to-(--color-gold-dark) text-[16px] text-black hover:text-(--color-accent-green) hover:shadow shadow-[#d8c27a] font-bold  cursor-pointer rounded-sm flex justify-center items-center gap-1 transition-all duration-500 ease-in-out"
					>
						<CartIconButton size={25} />
						<span>افزودن به سبد خرید</span>
					</button>
				)}
			</div>
			<div className="w-full">
				<button className="w-full py-1 mx-auto border border-(--color-gold-dark) text-[12px] text-(--color-gold-dark) hover:shadow shadow-[#d8c27a] font-bold  cursor-pointer rounded-sm flex justify-center items-center gap-1 transition-all duration-500 ease-in-out">
					<FavoriteFilled size={25} />
					<span>افزودن به علاقه مندی ها</span>
				</button>
			</div>
		</div>
	);
}

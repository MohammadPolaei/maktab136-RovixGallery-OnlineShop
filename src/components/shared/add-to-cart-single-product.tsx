"use client";

import { Product } from "@/types/product-data-type";
import { useEffect, useMemo, useState } from "react";
import { useCartStore } from "../main-app/cart/hooks/use-cart-CRUD";

interface Props {
	product: Product;
	usageType: "single-product" | "cart" | "product-card";
	defaultQuantity?: number;
	handleInternalQuantityChange?: (newVal: number) => void;
	setSingleProdQuantityValue?: (val: number) => void;
}

export default function AddToCartSingleProduct({
	product,
	usageType,
	defaultQuantity = 1,
	handleInternalQuantityChange,
	setSingleProdQuantityValue,
}: Props) {
	const isCart = usageType === "cart";
	const isSingle = usageType === "single-product";
	const isProdCard = usageType === "product-card";
	const notAvailable = product.stock === 0;

	const { cart } = useCartStore();

	const [count, setCount] = useState<number>(() => {
		if (notAvailable) return 0;
		return Math.max(1, defaultQuantity);
	});

	const item = cart?.data.items.find((i) => i.product?._id === product._id);

	useEffect(() => {
		if (!cart) return;

		const item = cart.data.items.find((i) => i.product?._id === product._id);

		if (item) setCount(item.quantity);
	}, [cart, product._id]);

	useEffect(() => {
		if (isCart) {
			setCount(Math.max(1, defaultQuantity));
		}
	}, [defaultQuantity, isCart]);

	const applyNewValue = (newVal: number) => {
		setCount(newVal);
		handleInternalQuantityChange?.(newVal);

		if (isSingle || isProdCard) {
			setSingleProdQuantityValue?.(newVal);
		}
	};

	const updateByStep = (step: number) => {
		const nextVal = count + step;

		if (nextVal >= 1 && nextVal <= product.stock) {
			applyNewValue(nextVal);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;

		if (val === "") {
			setCount(0);
			return;
		}

		const num = Number(val);

		if (Number.isNaN(num)) return;
		if (num < 1) {
			setCount(0);
			return;
		}

		const safeNum = Math.min(num, product.stock);
		applyNewValue(safeNum);
	};

	const handleBlur = () => {
		if (!notAvailable && count < 1) {
			applyNewValue(1);
		}
	};

	const errorMessage = useMemo(() => {
		if (notAvailable) return null;
		if (count < 1) return "مقدار نمی‌تواند کمتر از 1 باشد";
		if (count > product.stock) return "بیشتر از موجودی";
		if (item) {
			if (count - item.quantity > 5) return "بیشتر از 5 عدد مجاز نیست";
		}
		return null;
	}, [count, product.stock, notAvailable]);

	const inputValue: string | number = count === 0 ? "" : count;

	const btnBase =
		"font-bold w-6 h-8 text-[14px] border border-(--color-gold)/50 flex justify-center items-center cursor-pointer transition-all duration-500 ease-in-out disabled:opacity-30 disabled:border-white/0 active:scale-120 origin-center";

	return (
		<div
			className={`flex flex-col md:flex-row justify-start items-center gap-1 relative ${
				isSingle ? "py-6" : ""
			}`}
		>
			{isProdCard ? null : (
				<p className="text-gray-700 text-[12px] m-1">تعداد</p>
			)}

			<div className="flex justify-start items-center">
				<button
					type="button"
					disabled={notAvailable || count <= 1}
					onClick={() => updateByStep(-1)}
					className={`${btnBase} bg-black/80 active:bg-(--color-gold)/80 text-white/80 border-l-0 rounded-r-sm`}
				>
					-
				</button>

				<input
					disabled={notAvailable}
					type="number"
					value={inputValue}
					onChange={handleInputChange}
					onBlur={handleBlur}
					className={`w-15 h-10 border ${
						errorMessage ? "border-red-500" : "border-black/30"
					} rounded-sm text-center ${
						isProdCard ? "text-black" : "text-black/80"
					} outline-0 disabled:opacity-50`}
				/>

				<button
					type="button"
					disabled={notAvailable || count >= 5 || count == product.stock}
					onClick={() => updateByStep(1)}
					className={`${btnBase} bg-black/80 active:bg-(--color-gold)/80 text-white/80 border-r-0 rounded-l-sm`}
				>
					+
				</button>

				{errorMessage && (
					<p
						className={`p-1 text-[12px] text-center absolute min-w-40 rounded-sm ${
							isSingle
								? "bottom-23 md:bottom-18 lg:-bottom-2 -right-6 md:right-1 lg:right-2 bg-red-500/10 text-red-500"
								: isProdCard
								? "bottom-12 -right-6 bg-red-500/10 text-red-500"
								: "bottom-10 md:-bottom-12 lg:-bottom-6 -right-7 md:right-0 bg-red-200/90 text-red-900"
						}`}
					>
						{errorMessage}
					</p>
				)}
			</div>
		</div>
	);
}

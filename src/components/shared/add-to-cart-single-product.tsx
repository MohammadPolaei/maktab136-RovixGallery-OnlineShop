"use client";
import { useEffect, useMemo, useState } from "react";

interface Props {
	productStock: number;
	usageType: "single-product" | "cart" | "product-card";
	defaultQuantity?: number;
	handleInternalQuantityChange?: (newVal: number) => void;
	setSingleProdQuantityValue: (val: number) => void;
}

export default function AddToCartSingleProduct({
	productStock,
	usageType,
	defaultQuantity = 1,
	handleInternalQuantityChange,
	setSingleProdQuantityValue,
}: Props) {
	const isCart = usageType === "cart";
	const isSingle = usageType === "single-product";
	const isProdCard = usageType === "product-card";
	const notAvailable = productStock === 0;

	const [count, setCount] = useState<number>(() => {
		if (notAvailable) return 0;
		return isCart ? Math.max(1, defaultQuantity) : 1;
	});

	useEffect(() => {
		if (isCart) {
			setCount(Math.max(1, defaultQuantity));
		}
	}, [defaultQuantity, isCart]);

	const applyNewValue = (newVal: number) => {
		setCount(newVal);

		handleInternalQuantityChange?.(newVal);

		if (isSingle || isProdCard) {
			setSingleProdQuantityValue(newVal);
		}
	};

	const updateByStep = (step: number) => {
		const nextVal = count + step;
		if (nextVal >= 1 && nextVal <= productStock) {
			applyNewValue(nextVal);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		if (val === "") return setCount(0);

		const num = parseInt(val);
		if (isNaN(num) || num < 1) return;

		const safeNum = Math.min(num, productStock);
		applyNewValue(safeNum);
	};

	const handleBlur = () => {
		if (count < 1) applyNewValue(1);
	};

	const errorMessage = useMemo(() => {
		if (notAvailable) return null;
		if (count < 1) return "مقدار نمیتواند کمتر از 1 باشد";
		if (count > productStock) return "بیشتر از موجودی";
		return null;
	}, [count, productStock, notAvailable]);

	const btnBase =
		"font-bold w-6 h-8 border border-(--color-gold)/50 flex justify-center items-center cursor-pointer transition-all duration-500 ease-in-out disabled:opacity-30 disabled:border-white/0 active:scale-120 origin-center";

	const themeStyles = isSingle
		? "bg-(--color-gold)/10 active:bg-(--color-accent-green)/20 text-(--color-gold)/80"
		: isProdCard
		? "bg-black/80 active:bg-(--color-gold)/80 text-white/80"
		: "bg-(--color-gold)/80 active:bg-(--color-accent-green)/80 text-black/80";

	return (
		<div
			className={`flex flex-col md:flex-row justify-start items-center gap-1 relative ${
				isSingle ? "py-6" : ""
			}`}
		>
			{isProdCard ? null : <p className="text-gray-300">تعداد</p>}

			<div className="flex justify-start items-center">
				<button
					type="button"
					disabled={notAvailable || count <= 1}
					onClick={() => updateByStep(-1)}
					className={`${btnBase} ${themeStyles} border-l-0 rounded-r-sm`}
				>
					{"-"}
				</button>

				<input
					disabled={notAvailable}
					type="number"
					value={count === 0 ? "" : count}
					onChange={handleInputChange}
					onBlur={handleBlur}
					className={`w-15 h-10 border ${
						errorMessage ? "border-red-500" : "border-(--color-gold)/50"
					} rounded-sm text-center ${
						isProdCard ? "text-black" : "text-(--color-gold)"
					} outline-0 disabled:opacity-50`}
				/>

				<button
					type="button"
					disabled={notAvailable || count >= productStock}
					onClick={() => updateByStep(1)}
					className={`${btnBase} ${themeStyles} border-r-0 rounded-l-sm`}
				>
					{"+"}
				</button>

				{errorMessage && (
					<p
						className={`p-1 bg-red-500/10 text-red-500 text-[8px] text-center absolute min-w-27 rounded-sm ${
							isSingle ? "bottom-0" : "bottom-10 md:-bottom-5"
						}`}
					>
						{errorMessage}
					</p>
				)}
			</div>
		</div>
	);
}

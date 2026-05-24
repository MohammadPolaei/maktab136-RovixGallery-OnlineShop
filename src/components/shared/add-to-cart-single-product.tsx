"use client";
import { useEffect, useState } from "react";

export default function AddToCartSingleProduct({
	prodID,
	productStock,
	usageType,
	defaultQuantity = 0,
	setDefaultQuantity,
}: {
	prodID: string;
	productStock: number;
	usageType: "single-product" | "cart";
	defaultQuantity?: number;
	setDefaultQuantity?: (val: number) => void;
}) {
	const [count, setCount] = useState<number>(
		defaultQuantity ? defaultQuantity : 1
	);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const notAvailable = productStock == 0;

	useEffect(() => {
		count < 1 ? setErrorMessage("مقدار نمیتواند کمتر از 1 باشد") : null;
	}, [count]);
	return (
		<div
			className={`flex flex-col md:flex-row justify-start items-center gap-1 relative ${
				usageType == "single-product" ? "py-6" : ""
			}`}
		>
			<p className="text-gray-300">{`تعداد`}</p>
			<div className="flex justify-start items-center">
				<button
					disabled={notAvailable}
					onClick={() => {
						count > 1 ? setCount((perv) => perv - 1) : "";
						usageType == "cart" && setDefaultQuantity && defaultQuantity > 1
							? setDefaultQuantity(count - 1)
							: null;
					}}
					className={`active:scale-120 origin-center ${
						usageType == "single-product"
							? "bg-(--color-gold)/10 active:bg-red-500/20 text-(--color-gold)/80"
							: "bg-(--color-gold)/80 active:bg-red-500/80 text-black/80"
					} font-bold w-6 h-8 border border-(--color-gold)/50 border-l-0 rounded-r-sm flex flex-col justify-center items-center cursor-pointer transition-all duration-500 ease-in-out disabled:opacity-50 disabled:border-white/0`}
				>
					-
				</button>
				<input
					disabled={notAvailable}
					value={notAvailable ? (usageType == "single-product" ? 0 : 1) : count}
					onChange={(e) => {
						const val = e.target.value;

						if (val === "") {
							setCount(0);
							return;
						}

						const num = Number(val);

						if (num < 1) {
							setErrorMessage("مقدار باید حداقل 1 باشد");
						} else if (num > productStock) {
							setErrorMessage("موجودی کافی نیست");
						} else {
							setErrorMessage("");
						}

						setCount(num);
					}}
					type="number"
					className={`w-15 h-10 border ${
						count < 0 ? "border-red-500" : "border-(--color-gold)/50"
					} rounded-sm text-center text-(--color-gold) outline-0 disabled:opacity-50 disabled:border-white/0`}
				/>
				{count < 1 && (
					<p
						className={`p-1 bg-red-500/10 text-red-500 text-[8px] text-center absolute ${
							usageType == "single-product"
								? "bottom-0"
								: "bottom-10 md:-bottom-5"
						} 
					 rounded-sm
					
					`}
					>
						{errorMessage}
					</p>
				)}
				<button
					disabled={notAvailable}
					onClick={() => {
						setCount((perv) => perv + 1);
						usageType == "cart" && setDefaultQuantity
							? setDefaultQuantity(count + 1)
							: null;
					}}
					className={`active:scale-120 origin-center
						${
							usageType == "single-product"
								? "bg-(--color-gold)/10 active:bg-red-500/20 text-(--color-gold)/80"
								: "bg-(--color-gold)/80 active:bg-green-500/80 text-black/80"
						}
						bg-(--color-gold)/10 font-bold w-6 h-8 border border-(--color-gold)/50 border-r-0 rounded-l-sm flex flex-col justify-center items-center cursor-pointer transition-all duration-500 ease-in-out disabled:opacity-50 disabled:border-white/0`}
				>
					+
				</button>
			</div>
		</div>
	);
}

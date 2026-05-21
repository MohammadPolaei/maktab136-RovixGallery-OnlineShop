"use client";
import { useEffect, useState } from "react";

export default function AddToCartSingleProduct({
	prodID,
	productStock,
}: {
	prodID: string;
	productStock: number;
}) {
	const [count, setCount] = useState<number>(1);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const notAvailable = productStock == 0;
	console.log(notAvailable);

	useEffect(() => {
		count < 1 ? setErrorMessage("مقدار نمیتواند کمتر از 1 باشد") : null;
	}, [count]);
	return (
		<div className="flex flex-col md:flex-row justify-start items-center gap-1 relative py-6">
			<p className="text-gray-300">{`تعداد`}</p>
			<div className="flex justify-start items-center">
				<button
					disabled={notAvailable}
					onClick={() => {
						count > 1 ? setCount((perv) => perv - 1) : "";
					}}
					className="active:scale-120 origin-center bg-(--color-gold)/10 active:bg-red-500/20 font-bold text-(--color-gold)/80 w-6 h-8 border border-(--color-gold)/50 border-l-0 rounded-sm flex flex-col justify-center items-center cursor-pointer transition-all duration-500 ease-in-out disabled:opacity-50 disabled:border-white/0"
				>
					-
				</button>
				<input
					disabled={notAvailable}
					value={notAvailable ? 0 : count}
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
					<p className="p-1 bg-red-500/10 text-red-500 text-[8px] text-center absolute bottom-0 rounded-sm">
						{errorMessage}
					</p>
				)}
				<button
					disabled={notAvailable}
					onClick={() => setCount((perv) => perv + 1)}
					className="active:scale-120 origin-center bg-(--color-gold)/10 active:bg-green-500/20 font-bold text-(--color-gold)/80 w-6 h-8 border border-(--color-gold)/50 border-r-0 rounded-sm flex flex-col justify-center items-center cursor-pointer transition-all duration-500 ease-in-out disabled:opacity-50 disabled:border-white/0"
				>
					+
				</button>
			</div>
		</div>
	);
}

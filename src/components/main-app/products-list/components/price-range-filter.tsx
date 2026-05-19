"use client";

import { faNumber } from "@/utils/convert-number-into-persian";
import * as Slider from "@radix-ui/react-slider";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface PriceRangeProps {
	min?: number;
	max?: number;
	step?: number;
}

const PriceRangeFilter: React.FC<PriceRangeProps> = ({
	min = 0,
	max = 1000000000,
	step = 100000,
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const initialMin = Number(searchParams.get("minPrice")) || min;
	const initialMax = Number(searchParams.get("maxPrice")) || max;

	const [range, setRange] = useState<number[]>([initialMin, initialMax]);

	useEffect(() => {
		setRange([initialMin, initialMax]);
	}, [initialMin, initialMax]);

	const updateUrl = (values: number[]): void => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("minPrice", values[0].toString());
		params.set("maxPrice", values[1].toString());
		router.push(`/products?${params.toString()}`);
	};

	const handleValueChange = (newValues: number[]): void => {
		setRange(newValues);
	};

	const handleValueCommit = (newValues: number[]): void => {
		updateUrl(newValues);
	};

	const resetFilter = (): void => {
		setRange([min, max]);
		const params = new URLSearchParams(searchParams.toString());
		params.delete("minPrice");
		params.delete("maxPrice");
		router.push(`/products?${params.toString()}`);
	};

	return (
		<div className="w-full px-1 py-2 bg-white rounded-sm md:shadow-md md:shadow-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
			<div className="min-w-30 flex-1 hidden md:flex items-center justify-center gap-1">
				<h3 className="text-[10px] text-neutral-500">فیلتر بر اساس قیمت</h3>
				<span className="text-[10px] text-neutral-400 px-1 bg-neutral-100 rounded">
					ریال
				</span>
			</div>

			<div className="w-full flex-8">
				<div className="w-full flex justify-between items-center">
					<div className="flex-1 min-w-fit text-center text-[10px] text-neutral-600">
						{faNumber(range[1])}
					</div>

					<Slider.Root
						className="relative flex-6 flex items-center select-none touch-none w-full h-5 mx-2"
						max={max}
						min={min}
						step={step}
						value={range}
						onValueChange={handleValueChange}
						onValueCommit={handleValueCommit}
						dir="ltr"
					>
						<Slider.Track className="bg-gray-200 relative grow rounded-full h-1">
							<Slider.Range className="absolute bg-[#003d33] rounded-full h-full" />
						</Slider.Track>

						<Slider.Thumb
							className="block w-4 h-4 bg-white border-2 border-[#003d33] shadow-md rounded-full hover:scale-110 focus:outline-none transition-transform cursor-pointer"
							aria-label="Minimum Price"
						/>
						<Slider.Thumb
							className="block w-4 h-4 bg-white border-2 border-[#003d33] shadow-md rounded-full hover:scale-110 focus:outline-none transition-transform cursor-pointer"
							aria-label="Maximum Price"
						/>
					</Slider.Root>

					<div className="flex-1 min-w-fit text-center text-[10px] text-neutral-600">
						{faNumber(range[0])}
					</div>
				</div>
			</div>

			<div className="min-w-25 flex-1 flex justify-center items-center">
				<button
					onClick={resetFilter}
					className="text-[10px] text-red-500 px-3 py-1 rounded-sm bg-red-500/10 hover:bg-red-500/50 hover:text-white transition-all duration-300"
				>
					حذف فیلتر قیمت
				</button>
			</div>
		</div>
	);
};

export default PriceRangeFilter;

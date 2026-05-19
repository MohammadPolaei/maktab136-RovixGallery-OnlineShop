"use client";

import * as Slider from "@radix-ui/react-slider";
import React, { useState } from "react";

interface PriceRangeProps {
	min?: number;
	max?: number;
	step?: number;
	onValueChange?: (values: number[]) => void;
}

const PriceRangeFilter: React.FC<PriceRangeProps> = ({
	min = 0,
	max = 1000000000,
	step = 100000,
	onValueChange,
}) => {
	const [range, setRange] = useState([min, max]);

	const handleValueChange = (newValues: number[]) => {
		setRange(newValues);
		if (onValueChange) onValueChange(newValues);
	};

	const formatPrice = (value: number) => {
		return value.toLocaleString("fa-IR");
	};

	return (
		<div className="w-full md:min-w-100 md:max-w-150 px-1 py-1 bg-white rounded-sm md:shadow md:shadow-black/5 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5">
			<div className="flex-1 hidden md:flex items-center justify-center gap-2">
				<h3 className="text-[10px] min-w-22 md:text-[10px] text-neutral-500 flex items-center gap-2">
					فیلتر بر اساس قیمت
				</h3>
				<span className="text-[8px] md:text-[10px] text-neutral-300-300 p-1 bg-neutral-100 rounded-sm">
					ریال
				</span>
			</div>

			<Slider.Root
				className="relative flex-3 flex items-center select-none touch-none w-3/4 h-5"
				defaultValue={[min, max]}
				max={max}
				min={min}
				step={step}
				value={range}
				onValueChange={handleValueChange}
				dir="ltr"
			>
				<Slider.Track className="bg-gray-200 relative grow rounded-full h-1">
					<Slider.Range className="absolute bg-(--color-accent-green) rounded-full h-full" />
				</Slider.Track>

				{/* شستی اول */}
				<Slider.Thumb
					className="block w-3 h-3 bg-white border-2 border-[#003d33] shadow-md rounded-full hover:scale-110 focus:outline-none transition-transform cursor-pointer"
					aria-label="Minimum Price"
				/>
				{/* شستی دوم */}
				<Slider.Thumb
					className="block w-3 h-3 bg-white border-2 border-[#003d33] shadow-md rounded-full hover:scale-110 focus:outline-none transition-transform cursor-pointer"
					aria-label="Maximum Price"
				/>
			</Slider.Root>

			<div className="flex-1 flex flex-col justify-center items-center gap-3">
				<button
					onClick={() => handleValueChange([min, max])}
					className="md:min-w-25 text-[8px] md:text-[10px] text-red-500 px-3 py-1 rounded-sm bg-red-500/10 cursor-pointer hover:bg-red-500/50 hover:text-white transition-all duration-300 ease-in-out"
				>
					حذف فیلتر قیمت
				</button>
			</div>
		</div>
	);
};

export default PriceRangeFilter;

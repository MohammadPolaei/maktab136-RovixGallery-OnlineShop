import { DeleteIcon } from "@/assets/SVG/dashboard-icons/delete-icon";
import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import { faNumber } from "@/utils/convert-number-into-persian";
import Image from "next/image";
import { GetCartResponse } from "../types";

type Props = {
	name: string;
	color: string;
	dialColor: string;
	images: string[];
	price: number;
	cartItemInfo: GetCartResponse;
};

export default function CartItemCard({
	name,
	color,
	dialColor,
	images,
	price,
	cartItemInfo,
}: Props) {
	return (
		<div className="w-full bg-white text-[10px] rounded-sm py-5 px-10 relative flex flex-col md:flex-row justify-evenly items-center gap-5">
			<div className="w-full flex-1">
				<Image
					alt={`تصویر محصول ${name}`}
					src={images[0]}
					width={500}
					height={500}
					className="rounded-md w-50 md:w-full mt-10 md:mt-0 object-cover aspect-square"
				/>
			</div>
			<div className="flex-4 flex flex-col justify-center items-start gap-5">
				<div>{name}</div>
				<div className="flex items-center gap-2">
					<span>{color}</span>
					<span>{dialColor}</span>
				</div>
				<div className="flex items-center gap-2">
					<div>
						<span>قیمت واحد</span>
						<span>{faNumber(price)}</span>
					</div>
					<div className="flex justify-between items-center">
						<span>تعداد</span>
						<div>action buttons</div>
						<div className="flex items-center gap-2">
							<span>قیمت کل</span>
							<span>{cartItemInfo.data.totalPrice}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute top-5 left-5 md:top-10 md:left-10 flex flex-col justify-center items-end gap-3">
				<div className="flex flex-col justify-center items-center text-[10px]">
					<span>تاریخ ثبت محصول به سبد خرید</span>
					{cartItemInfo.data.createdAt}
				</div>
				<div className="flex flex-col justify-center items-center gap-3">
					<div>
						<FavoriteOutlined size={18} />
					</div>
					<div>
						<DeleteIcon size={22} />
					</div>
				</div>
			</div>
		</div>
	);
}

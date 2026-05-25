import { DeleteIcon } from "@/assets/SVG/dashboard-icons/delete-icon";
import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import {
	BrandIcon,
	DialIcon,
	DollarIcon,
} from "@/assets/SVG/product-card/filters/filters-icon";
import AskModal from "@/components/base/ask-modal";
import Modal from "@/components/base/modal";
import AddToCartSingleProduct from "@/components/shared/add-to-cart-single-product";
import ShowColorOnCard from "@/components/shared/show-color-on-card";
import { faNumber } from "@/utils/convert-number-into-persian";
import Image from "next/image";
import { GetCartResponse } from "../types";

type Props = {
	name: string;
	color: string;
	dialColor: string;
	images: string[];
	price: number;
	brand: string;
	cartItemInfo: GetCartResponse;
	prodID: string;
	stock: number;
	quantity: number;
	error: Error | null;
	isLoading: boolean;
	confirmQuestion: boolean;
	cartID: string;
	openDelete: boolean;

	setOpenDelete: (val: boolean) => void;
	setConfirmQuestion: (val: boolean) => void;
	setItemIdToDelete: (val: string) => void;
	handleQuantityChange: (
		itemId: string,
		newQuantity: number,
		originalQuantity: number
	) => void;
	updateQueue: Record<string, number>;
};

// date format
const formatCartDate = (isoDate: string): string => {
	const date = new Date(isoDate);

	return new Intl.DateTimeFormat("fa-IR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		calendar: "persian",
	}).format(date);
};

export default function CartItemCard({
	prodID,
	stock,
	name,
	color,
	images,
	price,
	brand,
	cartItemInfo,
	quantity,
	isLoading,
	openDelete,
	confirmQuestion,
	cartID,
	updateQueue,
	setConfirmQuestion,
	setOpenDelete,
	setItemIdToDelete,
	handleQuantityChange,
}: Props) {
	// default product quantity

	// local update change
	const displayQuantity = updateQueue[cartID] ?? quantity;

	const handleInternalQuantityChange = (newVal: number) => {
		handleQuantityChange(cartID, newVal, quantity);
	};

	return (
		<div className="w-full bg-white text-[10px] rounded-sm py-5 px-3 md:px-10 relative flex flex-col lg:flex-row justify-evenly items-start md:items-center gap-5">
			<div className="w-full flex-1">
				<Image
					alt={`تصویر محصول ${name}`}
					src={images[0]}
					width={500}
					height={500}
					className="rounded-md w-30 lg:w-full mt-10 md:mt-0 object-cover aspect-square"
				/>
			</div>
			<div className="w-full flex-4 flex flex-col justify-between md:justify-center items-start gap-5">
				<div className="flex-1 flex flex-col justify-between w-full h-full md:justify-center items-start gap-2 border-b border-b-black/20 lg:border-0 pb-5 lg:pb-0">
					<div className="text-[10px] md:text-[16px] font-semibold">{name}</div>
					<div className="flex items-center gap-1">
						<BrandIcon size={12} />
						<span className="text-[12px] text-(--color-accent-green) bg-(--color-accent-green)/10 px-1 rounded-sm">
							{brand}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span>
							<DialIcon size={12} />
						</span>
						<span>{"رنگ صفحه :"}</span>
						<div className="flex items-center gap-1">
							<span>{color}</span>
							<span>{ShowColorOnCard(color)}</span>
						</div>
					</div>
				</div>

				<div className="w-full flex-1 flex flex-col lg:flex-row justify-between items-center gap-2">
					<div className="flex justify-center items-center gap-1 min-w-50">
						<div className="hidden md:block">
							<DollarIcon size={14} />
						</div>
						<span>{`قیمت واحد :`}</span>
						<span className="flex items-center gap-1">
							{faNumber(price)}
							<span className="text-black/40 text-[10px]">{"ریال"}</span>
						</span>
					</div>
					<div className="w-full flex flex-col justify-between items-center">
						<div>
							<AddToCartSingleProduct
								usageType="cart"
								prodID={prodID}
								productStock={stock}
								defaultQuantity={displayQuantity}
								handleInternalQuantityChange={handleInternalQuantityChange}
							/>
						</div>
					</div>
					<div className="flex justify-center items-center gap-2 min-w-50">
						<span>قیمت کل</span>
						<span className="flex items-center gap-1">
							{faNumber(price * displayQuantity)}
							<span className="text-black/40 text-[10px]">{"ریال"}</span>
						</span>
					</div>
				</div>
			</div>
			<div className="absolute top-2 left-2 flex flex-col justify-center items-center text-[10px]">
				<span>تاریخ افزودن محصول به سبد خرید</span>
				<time className="p-1 bg-gray-100 rounded-sm">
					{formatCartDate(cartItemInfo.data.createdAt)}
				</time>
			</div>
			<div className="absolute top-15 left-5 md:top-15 md:left-10 flex flex-col justify-center items-end gap-3">
				<div className="flex flex-col justify-center items-center gap-3">
					<button
						onClick={() => {}}
						className="cursor-pointer active:scale-115 origin-center transition-all duration-200 ease-in-out"
					>
						<FavoriteOutlined size={18} />
					</button>
					<button
						onClick={() => {
							setItemIdToDelete(cartID);
							setOpenDelete(true);
						}}
						className="cursor-pointer active:scale-115 origin-center transition-all duration-200 ease-in-out"
					>
						<DeleteIcon size={22} />
					</button>
				</div>
			</div>
			<AskModal
				confirmQuestion={confirmQuestion}
				setConfirmQuestion={setConfirmQuestion}
				theQuestion={`آیا از حذف ${name} اطمینان دارید؟`}
				openDelete={openDelete}
				setOpenDelete={setOpenDelete}
			/>
			<Modal
				modalUsecaseType="message"
				open={isLoading}
				setOpen={() => {}}
				modalTitle="حذف محصول"
				extraClasses=""
			>
				<RovixLuxuryLoader />
			</Modal>
		</div>
	);
}

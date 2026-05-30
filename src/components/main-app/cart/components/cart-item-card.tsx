import { DeleteIcon } from "@/assets/SVG/dashboard-icons/delete-icon";
import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";
import {
	BrandIcon,
	DialIcon,
	DollarIcon,
} from "@/assets/SVG/product-card/filters/filters-icon";
import AskModal from "@/components/base/ask-modal";
import AddToCartSingleProduct from "@/components/shared/add-to-cart-single-product";
import ShowColorOnCard from "@/components/shared/show-color-on-card";
import { faNumber } from "@/utils/convert-number-into-persian";
import Image from "next/image";
import { CartItem } from "../types";

type Props = {
	cartItem: CartItem;
	error: Error | null;
	isLoading: boolean;
	confirmQuestion: boolean;
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

export default function CartItemCard({
	cartItem,
	openDelete,
	confirmQuestion,
	updateQueue,
	setConfirmQuestion,
	setOpenDelete,
	setItemIdToDelete,
	handleQuantityChange,
}: Props) {
	// default product quantity

	// local update change
	const displayQuantity = updateQueue[cartItem._id] ?? cartItem.quantity;

	const handleInternalQuantityChange = (newVal: number) => {
		handleQuantityChange(cartItem._id, newVal, cartItem.quantity);
	};

	return (
		<div className="w-full bg-white text-[10px] rounded-sm py-5 px-3 md:px-10 relative flex flex-col lg:flex-row justify-evenly items-start md:items-center gap-5">
			<div className="w-full flex-1">
				<Image
					unoptimized
					alt={`تصویر محصول ${name}`}
					src={cartItem.product.images[0]}
					width={500}
					height={500}
					className="rounded-md w-30 lg:w-full mt-10 md:mt-0 object-cover aspect-square"
				/>
			</div>
			<div className="w-full flex-4 flex flex-col justify-between md:justify-center items-start gap-5">
				<div className="flex-1 flex flex-col justify-between w-full h-full md:justify-center items-start gap-2 border-b border-b-black/20 pb-5">
					<div className="text-[10px] md:text-[16px] font-semibold">
						{cartItem.product.name}
					</div>
					<div className="flex items-center gap-1">
						<BrandIcon size={12} />
						<span className="text-[12px] text-(--color-accent-green) bg-(--color-accent-green)/10 px-1 rounded-sm">
							{cartItem.product.brand}
						</span>
					</div>
					<div className="flex items-center gap-2 text-[12px]">
						<span>
							<DialIcon size={12} />
						</span>
						<span>{"رنگ صفحه :"}</span>
						<div className="flex items-center gap-1">
							<span>{cartItem.product.color}</span>
							<span>{ShowColorOnCard(cartItem.product.color)}</span>
						</div>
					</div>
				</div>

				<div className="w-full flex-1 flex flex-col lg:flex-row justify-between items-center gap-2 text-[12px]">
					<div className="flex justify-between items-center gap-0 min-w-47">
						<div className="flex items-center gap-0.5">
							<div className="hidden md:block">
								<DollarIcon size={14} />
							</div>
							<span>{`قیمت واحد :`}</span>
						</div>
						<span className="flex items-center gap-1">
							{faNumber(cartItem.product.price)}
							<span className="text-black/40 text-[10px]">{"ریال"}</span>
						</span>
					</div>
					<div className="w-full flex flex-col justify-between items-center">
						<div>
							<AddToCartSingleProduct
								usageType="cart"
								product={cartItem.product}
								defaultQuantity={displayQuantity}
								handleInternalQuantityChange={handleInternalQuantityChange}
							/>
						</div>
					</div>
					<div className="flex justify-center items-center gap-2 min-w-50">
						<span>قیمت کل</span>
						<span className="flex items-center gap-1">
							{faNumber(cartItem.product.price * displayQuantity)}
							<span className="text-black/40 text-[10px]">{"ریال"}</span>
						</span>
					</div>
				</div>
			</div>

			<div className="absolute top-12 left-5 md:top-10 md:left-10 flex flex-col justify-center items-end gap-3">
				<div className="flex flex-col justify-center items-center gap-3">
					<button
						onClick={() => {}}
						className="cursor-pointer active:scale-115 origin-center transition-all duration-200 ease-in-out"
					>
						<FavoriteOutlined size={20} />
					</button>
					<button
						onClick={() => {
							setItemIdToDelete(cartItem._id);
							setOpenDelete(true);
						}}
						className="cursor-pointer active:scale-115 origin-center transition-all duration-200 ease-in-out"
					>
						<DeleteIcon size={26} />
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
		</div>
	);
}

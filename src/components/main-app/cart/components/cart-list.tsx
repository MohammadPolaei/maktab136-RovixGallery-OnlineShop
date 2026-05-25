import { CartItem, GetCartResponse } from "../types";
import CartItemCard from "./cart-item-card";
import CartItemSkeletonCard from "./cart-item-skeleton-card";

export default function CartList({
	cart,
	error,
	isError,
	isLoading,
	setOpenDelete,
	confirmQuestion,
	openDelete,
	setConfirmQuestionForItem,
	itemIdToDelete,
	setItemIdToDelete,
	handleQuantityChange,
}: {
	itemIdToDelete: string;
	setItemIdToDelete: (val: string) => void;
	setOpenDelete: (val: boolean) => void;
	openDelete: boolean;
	error: Error | null;
	cart: GetCartResponse | undefined;
	isError: boolean;
	isLoading: boolean;

	confirmQuestion: boolean;
	setConfirmQuestionForItem: (val: boolean) => void;
	handleQuantityChange: (
		itemId: string,
		newQuantity: number,
		originalQuantity: number
	) => void;
}) {
	const products = cart
		? cart.data.items.map((item: CartItem) => ({
				...item,
				product: {
					...item.product,
					images: item.product.images.map(
						(img: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`
					),
				},
		  }))
		: [];
	return (
		<div className="w-full h-[70vh] overflow-auto md:overflow-y-auto flex flex-col justify-start items-start gap-5 md:gap-1 rounded-sm shadow shadow-black/5">
			{cart ? (
				cart.data.items.length == 0 ? (
					<div className="w-full h-full flex flex-col justify-center items-center">
						محصولی برای نمایش وجود ندارد
					</div>
				) : (
					products.map((cartItem) => (
						<CartItemCard
							handleQuantityChange={handleQuantityChange}
							isLoading={isLoading}
							error={error}
							setOpenDelete={setOpenDelete}
							setItemIdToDelete={setItemIdToDelete}
							openDelete={openDelete && itemIdToDelete === cartItem._id}
							confirmQuestion={confirmQuestion}
							setConfirmQuestion={setConfirmQuestionForItem}
							quantity={cartItem.quantity}
							prodID={cartItem.product._id}
							cartID={cartItem._id}
							stock={cartItem.product.stock}
							cartItemInfo={cart}
							key={cartItem._id}
							dialColor={cartItem.product.dialColor}
							color={cartItem.product.dialColor}
							images={cartItem.product.images}
							name={cartItem.product.name}
							price={cartItem.price}
							brand={cartItem.product.brand}
						/>
					))
				)
			) : (
				<div className="w-full h-full flex flex-col justify-center items-center">
					<CartItemSkeletonCard />
				</div>
			)}
		</div>
	);
}

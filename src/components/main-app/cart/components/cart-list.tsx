import {
	QueryObserverResult,
	RefetchOptions,
	UseMutateFunction,
} from "@tanstack/react-query";
import { CartMutationResponse } from "../services/cart-CRUD";
import { CartItem, GetCartResponse } from "../types";
import CartItemCard from "./cart-item-card";

const cartItemsMock = [
	{
		name: "p1",
		color: "red",
		dialColor: "blue",
		images: [],
		price: 5,
	},
];

export default function CartList({
	cart,
	error,
	isError,
	isLoading,
	refetch,
	removeItem,
	updateItem,
	setOpenDelete,
	setConfirmQuestion,
}: {
	setConfirmQuestion: (val: boolean) => void;
	setOpenDelete: (val: boolean) => void;
	error: {} | null;
	cart: GetCartResponse | undefined;
	isError: boolean;
	isLoading: boolean;
	refetch: (
		options?: RefetchOptions
	) => Promise<QueryObserverResult<GetCartResponse, Error>>;
	removeItem: UseMutateFunction<CartMutationResponse, unknown, string, unknown>;
	updateItem: UseMutateFunction<
		CartMutationResponse,
		unknown,
		{
			itemId: string;
			quantity: number;
		},
		unknown
	>;
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
		<div className="w-full h-[70vh] overflow-auto md:overflow-y-auto flex flex-col justify-between items-start gap-1 rounded-sm shadow shadow-black/5">
			{cart ? (
				products.map((cartItem) => (
					<CartItemCard
						quantity={cartItem.quantity}
						prodID={cartItem.product._id}
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
			) : (
				<div className="w-full">محصولی برای نمایش وجود ندارد</div>
			)}
		</div>
	);
}

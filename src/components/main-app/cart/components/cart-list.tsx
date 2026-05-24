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
}: {
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
		? cart.data.items.map((cart: CartItem) => ({
				...cart.product,
				images: cart.product.images.map(
					(img: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`
				),
		  }))
		: [];
	return (
		<div className="w-full overflow-auto md:overflow-visible flex flex-col justify-between items-start gap-1">
			{cart ? (
				products.map((cartItem) => (
					<CartItemCard
						cartItemInfo={cart}
						key={cartItem._id}
						dialColor={cartItem.dialColor}
						color={cartItem.dialColor}
						images={cartItem.images}
						name={cartItem.name}
						price={cartItem.price}
					/>
				))
			) : (
				<div className="w-full">محصولی برای نمایش وجود ندارد</div>
			)}
		</div>
	);
}

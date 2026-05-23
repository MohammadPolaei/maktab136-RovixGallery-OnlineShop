import {
	QueryObserverResult,
	RefetchOptions,
	UseMutateFunction,
} from "@tanstack/react-query";
import { CartMutationResponse } from "../services/cart-CRUD";
import { GetCartResponse } from "../types";
import CartItem from "./cart-item";

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
	return (
		<div className="w-full">
			{cart?.data.items.map((cartItem) => (
				<CartItem
					key={cartItem._id}
					dialColor={cartItem.product.dialColor}
					color={cartItem.product.dialColor}
					images={cartItem.product.images}
					name={cartItem.product.name}
					price={cartItem.product.price}
				/>
			))}
		</div>
	);
}

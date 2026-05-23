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

export default function CartList() {
	return (
		<div className="w-full">
			{cartItemsMock.map((cartItem) => (
				<CartItem
					key={cartItem.name}
					dialColor={cartItem.dialColor}
					color={cartItem.color}
					images={cartItem.images}
					name={cartItem.name}
					price={cartItem.price}
				/>
			))}
		</div>
	);
}

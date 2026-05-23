// src/types/cart.ts

export type ApiResponse<T> = {
	success: boolean;
	data: T;
};

export type ProductCategory = "watch" | string;

export type ProductForCart = {
	_id: string;
	name: string;
	description: string;
	price: number;

	images: string[];
	category: ProductCategory;

	stock: number;
	brand: string;
	brandCountry: string;
	gender: string;

	material: string;
	color: string;
	dialColor: string;

	isAuthentic: boolean;

	popularity: number;
	rating: number;
	numReviews: number;

	isActive: boolean;

	createdAt?: string;
	updatedAt: string;
	__v?: number;
};

export type CartItem = {
	_id: string;
	product: ProductForCart;
	quantity: number;
	price: number;
};

export type Cart = {
	_id: string;
	user: string;
	items: CartItem[];
	totalPrice: number;

	createdAt: string;
	updatedAt: string;
	__v: number;
};

export type GetCartResponse = ApiResponse<Cart>;

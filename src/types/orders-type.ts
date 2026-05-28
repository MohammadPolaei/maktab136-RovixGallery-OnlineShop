export type MongoId = string;
export type ISODateString = string;

export type ShippingMethod = "post" | "tipax" | "courier" | "pickup";

export type OrderStatus =
	| "pending"
	| "confirmed"
	| "shipping"
	| "delivered"
	| "cancelled";

export interface ShippingAddress {
	name: string;
	phone: string;
	address: string;
}

export interface Product {
	_id: MongoId;
	name: string;
	description: string;
	price: number;
	images: string[];
	category: string;

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

	createdAt?: ISODateString;
	updatedAt?: ISODateString;

	__v?: number;
}

export interface OrderItem {
	_id: MongoId;

	product: Product | MongoId;

	name: string;
	quantity: number;
	price: number;
	image: string;
}

export interface OrderUserPopulated {
	_id: MongoId;
	name: string;
	email: string;
}

export type OrderUser = OrderUserPopulated | MongoId;

export interface Order {
	_id: MongoId;

	shippingAddress: ShippingAddress;

	user: OrderUser;

	orderItems: OrderItem[];

	paymentMethod: ShippingMethod;

	totalPrice: number;

	status: OrderStatus;

	isPaid: boolean;

	createdAt: ISODateString;
	updatedAt: ISODateString;

	__v?: number;
}

export interface PaginatedResponse<T> {
	success: boolean;
	count: number;
	data: T[];

	total?: number;
	page?: number;
	pages?: number;
}

export type OrdersListResponse = PaginatedResponse<Order>;

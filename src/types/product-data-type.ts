export interface Product {
	rating: number;
	numReviews: number;
	_id: string;
	name: string;
	description: string;
	price: number;
	brand: string;
	brandCountry: string;
	gender: string;
	material: string;
	color: string;
	dialColor: string;
	isAuthentic: boolean;
	stock: number;
	popularity: number;
	category: string;
	images: string[];
	isActive: boolean;
}
export interface ProductDataTable {
	productData: Product[];
	editable: boolean;
}

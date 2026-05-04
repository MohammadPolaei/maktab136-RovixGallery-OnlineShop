import { Product } from "@/types/product-data-type";
import { CategorySales } from "./types";

export const DASHBOARD_BASE_URL = "/dashboard";

export const sales = [
	{ date: "27 اردیبهشت", value: 500000000 },
	{ date: "6 خرداد", value: 1200000000 },
	{ date: "21 خرداد", value: 2000000000 },
	{ date: "25 خرداد", value: 1400000000 },
	{ date: "12 تیر", value: 2300000000 },
];

export const categorySales: CategorySales[] = [
	{ name: "ساعت کلاسیک", value: 400 },
	{ name: "ساعت اسپرت", value: 300 },
	{ name: "ساعت لوکس", value: 200 },
	{ name: "ساعت دیجیتال", value: 150 },
];

export const productsMockData: Product[] = [
	{
		rating: 0,
		numReviews: 0,
		_id: "69f8a7f12aa4274a9eafd5b9",
		name: "Omega Seamaster Diver 300M",
		description: "ساعت مچی اصل Omega مدل Seamaster Diver 300M...",
		price: 4267797272,
		brand: "Omega",
		brandCountry: "Switzerland",
		gender: "men",
		material: "Rubber",
		color: "Silver",
		dialColor: "White",
		isAuthentic: true,
		stock: 23,
		popularity: 54,
		category: "watch",
		images: ["/images/products/watch-placeholder.jpg"],
		isActive: true,
	},
];

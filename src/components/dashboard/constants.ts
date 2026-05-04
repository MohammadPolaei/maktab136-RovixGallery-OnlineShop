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

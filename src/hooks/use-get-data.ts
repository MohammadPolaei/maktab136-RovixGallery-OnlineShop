import { getProducts } from "@/services/get-products";
import { Product } from "@/types/product-data-type";
import { useEffect, useState } from "react";

export function useGetProducts() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// filters
	const [brand, setBrand] = useState("");
	const [gender, setGender] = useState("");
	const [sort, setSort] = useState(""); // cheap | expensive
	const [available, setAvailable] = useState("");
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");
	const [limit, setLimit] = useState(10);
	const [color, setColor] = useState("");
	const [dialColor, setDialColor] = useState("");
	const [material, setMaterial] = useState("");
	const [brandCountry, setBrandCountry] = useState("");
	const [totalPages, setTotalPages] = useState<number>(1);
	const [totalProductsCount, setTotalProductsCount] = useState<number>();

	useEffect(() => {
		let isMounted = true;

		const fetchProducts = async () => {
			setLoading(true);
			setError(null);

			try {
				const res = await getProducts({
					dialColor,
					material,
					brandCountry,
					color,
					brand,
					gender,
					sort,
					available,
					page,
					limit: 10,
					search,
				});
				const productDataRewright = res.data.data.map((prod: Product) => ({
					...prod,
					images: [`${process.env.NEXT_PUBLIC_BACKEND_URL}${prod.images[0]}`],
				}));

				setTotalPages(res.data.pages);
				setTotalProductsCount(res.data.total);

				// setTotalProductsCount(res.data.total);

				if (isMounted) {
					setProducts(productDataRewright);
				}
			} catch (err) {
				if (isMounted) {
					setError("خطا در دریافت محصولات");
				}
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		};

		fetchProducts();

		return () => {
			isMounted = false;
		};
	}, [
		brand,
		gender,
		sort,
		available,
		page,
		search,
		limit,
		dialColor,
		brandCountry,
		material,
		color,
	]);

	return {
		products,
		loading,
		error,
		// products data
		totalProductsCount,
		setTotalProductsCount,

		// filters
		brand,
		setBrand,
		gender,
		setGender,
		sort,
		setSort,
		available,
		setAvailable,
		page,
		setPage,
		totalPages,
		setTotalPages,
		search,
		setSearch,
		limit,
		setLimit,
		color,
		setColor,
		dialColor,
		setDialColor,
		material,
		setMaterial,
		brandCountry,
		setBrandCountry,
	};
}

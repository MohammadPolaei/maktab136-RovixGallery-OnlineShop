import { getProducts } from "@/services/get-products";
import { Product } from "@/types/product-data-type";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";

export function useGetProducts() {
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
	const [searchData, setSearchData] = useState("");

	// debounce search
	useEffect(() => {
		const timer = setTimeout(() => {
			setSearch(searchData);
		}, 2000);

		return () => clearTimeout(timer);
	}, [searchData]);

	// query params
	const queryParams = useMemo(
		() => ({
			dialColor,
			material,
			brandCountry,
			color,
			brand,
			gender,
			sort,
			available,
			page,
			limit,
			search,
		}),
		[
			dialColor,
			material,
			brandCountry,
			color,
			brand,
			gender,
			sort,
			available,
			page,
			limit,
			search,
		]
	);
	useEffect(() => {
		setPage(1);
	}, [
		dialColor,
		material,
		brandCountry,
		color,
		brand,
		gender,
		sort,
		available,
		search,
	]);

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["products", queryParams],

		queryFn: async () => {
			const res = await getProducts(queryParams);

			const products = res.data.data.map((prod: Product) => ({
				...prod,
				images: prod.images.map(
					(img: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`
				),
			}));

			return {
				products,
				totalPages: res.data.pages,
				totalProductsCount: res.data.total,
			};
		},

		placeholderData: (previousData) => previousData,
		staleTime: 1000 * 60 * 2,
	});

	return {
		products: data?.products ?? [],
		totalPages: data?.totalPages ?? 1,
		totalProductsCount: data?.totalProductsCount ?? 0,

		isLoading,
		isFetching,
		error,

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

		search,
		setSearch,

		searchData,
		setSearchData,

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

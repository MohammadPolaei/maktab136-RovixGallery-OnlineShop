"use client";
import ProductPagination from "@/components/shared/product-pagination";
import { getProducts } from "@/services/get-products";
import { Product } from "@/types/product-data-type";
import { useEffect, useState } from "react";
import ProductsFilters from "../../../../shared/products-filter";
import ProductsSearch from "../../../../shared/products-search";
import ProductsTable from "../../../../shared/products-table";
import ProductAdd from "./product-add";

export default function Products() {
	const [prodData, setProdData] = useState<Product[]>([]);
	// filters
	const [brand, setBrand] = useState("");
	const [gender, setGender] = useState<string>("");
	const [sort, setSort] = useState<string>("");
	const [stock, setStock] = useState("");
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	useEffect(() => {
		console.log(sort);

		const productData = getProducts({
			sort: sort,
			brand: brand,
			gender: gender,
			page: page,
			limit: 10,
			search: search,
		});
		productData.then((result) => setProdData(result.data.data));
	}, [brand, gender, stock, page, search, sort]);

	return (
		<section dir="rtl" className="px-4 py-8 space-y-6">
			<h1 className="text-2xl font-bold text-(--color-heading)">
				مدیریت محصولات
			</h1>

			<div className="space-y-3 rounded-xl bg-white shadow-md">
				<div className="flex flex-col md:flex-row justify-between items-center gap-2 p-3">
					<ProductsSearch />
					<ProductsFilters
						setBrand={setBrand}
						setGender={setGender}
						setSort={setSort}
						setStock={setStock}
						brand={brand}
						gender={gender}
						sort={sort}
					/>
					<ProductAdd />
				</div>
				<ProductsTable productData={prodData} editable />
			</div>
			<div className="flex justify-between items-center rounded-xl bg-white shadow-md p-3">
				<ProductPagination currentPage={1} totalPages={10} />
			</div>
		</section>
	);
}

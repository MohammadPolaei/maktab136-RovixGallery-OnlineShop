"use client";
import AskModal from "@/components/base/ask-modal";
import SectionTitle from "@/components/base/section-title";
import CartList from "@/components/main-app/cart/components/cart-list";
import CartPriceInfo from "@/components/main-app/cart/components/cart-price-info";
import SpecialOffers from "@/components/main-app/cart/components/special-offers";
import { useCartStore } from "@/components/main-app/cart/hooks/use-cart-CRUD";
import { useGetProducts } from "@/hooks/use-get-data";
import { Product } from "@/types/product-data-type";
import { useEffect, useState } from "react";

export default function Page() {
	const {
		cart,
		addItem,
		clearCart,
		error,
		isError,
		isLoading,
		refetch,
		removeItem,
		updateItem,
	} = useCartStore();

	const data = useGetProducts();

	const offeredProducts = data.products.filter(
		(p: Product) => p.popularity > 50
	);

	// clear cart
	const [clearConfirmQuestion, setClearConfirmQuestion] = useState(false);
	const [openClear, setOpenClear] = useState(false);

	useEffect(() => {
		if (clearConfirmQuestion) {
			clearCart();
		} else {
			return;
		}
	}, [clearConfirmQuestion]);

	// delete one item
	const [confirmQuestion, setConfirmQuestion] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const [itemIdToDelete, setItemIdtoDelete] = useState("");

	useEffect(() => {
		if (itemIdToDelete && confirmQuestion) {
			removeItem(itemIdToDelete);
		}
	}, [confirmQuestion, itemIdToDelete]);

	return (
		<section className="w-screen md:max-w-7xl md:min-w-3xl px-2 md:px-10 flex flex-col justify-start items-center gap-3">
			<div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] h-full gap-5">
				<CartPriceInfo cart={cart} setOpenClear={setOpenClear} />
				<CartList
					itemIdToDelete={itemIdToDelete}
					setItemIdToDelete={setItemIdtoDelete}
					confirmQuestion={confirmQuestion}
					setConfirmQuestionForItem={setConfirmQuestion}
					setOpenDelete={setOpenDelete}
					openDelete={openDelete}
					cart={cart}
					error={error}
					isError={isError}
					isLoading={isLoading}
					refetch={refetch}
					removeItem={removeItem}
					updateItem={updateItem}
				/>
				<AskModal
					confirmQuestion={clearConfirmQuestion}
					setConfirmQuestion={setClearConfirmQuestion}
					theQuestion="آیا از خالی کردن سبد خرید اطمینان دارید؟"
					openDelete={openClear}
					setOpenDelete={setOpenClear}
				/>
			</div>
			<div className="w-full">
				<SectionTitle title="پیشنهادات ویژه" />
				<SpecialOffers page={data.page} products={offeredProducts} />
			</div>
		</section>
	);
}

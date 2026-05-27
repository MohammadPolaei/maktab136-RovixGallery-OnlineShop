"use client";
import RovixLuxuryLoader from "@/assets/SVG/loading-icon";
import AskModal from "@/components/base/ask-modal";
import Modal from "@/components/base/modal";
import SectionTitle from "@/components/base/section-title";
import CartList from "@/components/main-app/cart/components/cart-list";
import CartPriceInfo from "@/components/main-app/cart/components/cart-price-info";
import SpecialOffers from "@/components/main-app/cart/components/special-offers";
import { useCartStore } from "@/components/main-app/cart/hooks/use-cart-CRUD";
import { useGetProducts } from "@/hooks/use-get-data";
import { Product } from "@/types/product-data-type";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
	const {
		refetch,
		cart,
		addItem,
		clearCart,
		error,
		isError,
		isLoading,
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
		return () => {
			setConfirmQuestion(false);
		};
	}, [confirmQuestion, itemIdToDelete]);

	// cart quantity update

	const [updateQueue, setUpdateQueue] = useState<Record<string, number>>({});

	const handleBatchUpdate = async () => {
		const entries = Object.entries(updateQueue);
		if (entries.length === 0) return;

		try {
			for (const [itemId, quantity] of entries) {
				await updateItem({ itemId, quantity });
			}

			setUpdateQueue({});
			await refetch();
			toast.success("سبد خرید با موفقیت بروزرسانی شد");
		} catch (err) {
			toast.error("خطا در بروزرسانی برخی آیتم‌ها");
		}
	};

	const handleQuantityChange = (itemId: string, newQuantity: number) => {
		const originalItem = cart?.data.items.find((item) => item._id === itemId);
		const originalQuantity = originalItem ? originalItem.quantity : 0;
		setUpdateQueue((prev) => {
			const newQueue = { ...prev };

			if (newQuantity === originalQuantity) {
				delete newQueue[itemId];
			} else {
				newQueue[itemId] = newQuantity;
			}
			return newQueue;
		});
	};

	const anyUpdateAvailable = Object.entries(updateQueue).length > 0;

	// cart info

	const totalProductsPrice =
		cart?.data.items.reduce((total, item) => {
			const currentQuantity = updateQueue[item._id] ?? item.quantity;
			return total + item.price * currentQuantity;
		}, 0) || 0;

	const shippingCost =
		totalProductsPrice > 10000000000 ? 0 : totalProductsPrice / 10000 + 5000000;

	const finalPayableAmount = totalProductsPrice + shippingCost;

	return (
		<section className="w-screen md:max-w-7xl md:min-w-3xl px-2 md:px-10 pt-5 flex flex-col justify-start items-center gap-3">
			<div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] h-full gap-5">
				<CartPriceInfo
					setUpdateQueue={setUpdateQueue}
					cart={cart}
					setOpenClear={setOpenClear}
					anyUpdate={anyUpdateAvailable}
					handleBatchUpdate={handleBatchUpdate}
					customTotal={totalProductsPrice}
					customFinal={finalPayableAmount}
					customShipping={shippingCost}
				/>
				<CartList
					updateQueue={updateQueue}
					handleQuantityChange={handleQuantityChange}
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
				/>
				<AskModal
					confirmQuestion={clearConfirmQuestion}
					setConfirmQuestion={setClearConfirmQuestion}
					theQuestion="آیا از خالی کردن سبد خرید اطمینان دارید؟"
					openDelete={openClear}
					setOpenDelete={setOpenClear}
				/>
				<Modal
					modalUsecaseType="message"
					open={isLoading}
					setOpen={() => {}}
					modalTitle="بروزرسانی سبد خرید"
					extraClasses=""
				>
					<RovixLuxuryLoader />
				</Modal>
			</div>
			<div className="w-full">
				<SectionTitle title="پیشنهادات ویژه" />
				<SpecialOffers page={data.page} products={offeredProducts} />
			</div>
		</section>
	);
}

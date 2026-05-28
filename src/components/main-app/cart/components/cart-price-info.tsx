import { faNumber } from "@/utils/convert-number-into-persian";
import { formatCartDate } from "@/utils/format-date-persian";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { GetCartResponse } from "../types";

export default function CartPriceInfo({
	cart,
	setOpenClear,
	anyUpdate,
	handleBatchUpdate,
	setUpdateQueue,
	customTotal,
}: {
	cart: GetCartResponse | undefined;
	setOpenClear: (val: boolean) => void;
	anyUpdate: boolean;
	handleBatchUpdate: () => Promise<void>;
	setUpdateQueue: Dispatch<SetStateAction<Record<string, number>>>;
	customTotal: number;
}) {
	const router = useRouter();
	return (
		<div className="w-full h-fit bg-white flex flex-col justify-start py-5 rounded-sm gap-5 px-5 shadow shadow-black/5 relative">
			<div
				className={`w-full backdrop-blur-[5px] flex flex-col justify-start items-center gap-2`}
			>
				<button
					onClick={() => {
						setOpenClear(true);
					}}
					className={`w-full py-3 bg-yellow-700/20 hover:bg-yellow-700/80 text-black  hover:text-white text-[10px] lg:text-[12px]  rounded-sm border border-black/10 cursor-pointer transition-all duration-500 ease-in-out`}
				>
					{"خالی کردن سبد خرید"}
				</button>
				<div className="w-full flex justify-between items-center gap-1">
					<button
						disabled={!anyUpdate}
						onClick={() => setUpdateQueue({})}
						className={`w-full py-3  text-[10px] lg:text-[12px] rounded-sm border border-black/10 cursor-pointer transition-all duration-500 ease-in-out  ${
							anyUpdate
								? "bg-red-500/20 hover:bg-red-500/80 text-black  hover:text-white"
								: "bg-black/20 text-black opacity-60"
						}`}
					>
						{"لغو تغییرات"}
					</button>
					<button
						disabled={!anyUpdate}
						onClick={handleBatchUpdate}
						className={`w-full py-3  text-[10px] lg:text-[12px] rounded-sm border border-black/10 cursor-pointer transition-all duration-500 ease-in-out  ${
							anyUpdate
								? "bg-(--color-accent-green)/20 hover:bg-(--color-accent-green)/80 text-black  hover:text-white"
								: "bg-black/20 text-black opacity-60"
						}`}
					>
						{"ذخیره تغییرات"}
					</button>
				</div>
			</div>

			<div className="font-semibold text-(--color-accent-green) border-b border-b-black/20 pb-5 relative flex flex-col lg:flex-row justify-between items-center gap-1">
				<span>{"خلاصه سفارش"}</span>
				<div className="flex flex-col justify-center items-center text-[10px]">
					{cart ? (
						<div className="flex items-center gap-1">
							<span className="text-black/50 font-normal">آخرین تغییرات</span>
							<time className="p-1 bg-gray-100 rounded-sm">
								{formatCartDate(cart.data.updatedAt)}
							</time>
						</div>
					) : null}
				</div>
			</div>
			<div className="flex flex-col justify-start items-start gap-2 h-fit pb-10 border-b border-b-black/20">
				<div className="w-full flex justify-between items-center gap-2">
					<span className="text-[12px]">{"جمع مبلغ کالاها"}</span>
					<span>
						{cart ? (
							<span className="flex justify-center items-center gap-1">
								{" "}
								{`${faNumber(customTotal)}`}
								<span className="text-black/50 text-[10px]">{"ریال"}</span>
							</span>
						) : null}
					</span>
				</div>

				<div className="w-full flex justify-between items-center gap-2 text-[12px]">
					<span>{"تخفیف اعمال شده"}</span>
					<span className="text-(--color-accent-green)">
						{"تخفیف اعمال نشده"}
					</span>
				</div>
			</div>
			<div className="flex flex-col justify-between items-start gap-5 w-full">
				<div className="w-full flex justify-between items-center gap-2">
					<span className="text-[14px] font-semibold">
						{"مبلغ قابل پرداخت"}
					</span>
					<span className="text-(--color-gold-dark) font-semibold">
						{cart && faNumber(customTotal)}{" "}
						<span className="text-black/50 text-[10px]">{"ریال"}</span>
					</span>
				</div>
				<div className="flex justify-between items-center gap-2 w-full">
					<button className="bg-(--color-dark-green) px-2 py-2.5 min-w-20 rounded-sm text-white hover:bg-(--color-accent-green) text-[12px]">
						{"اعمال"}
					</button>
					<input
						type="text"
						placeholder="کد تخفیف را وارد کنید"
						className="w-full p-2 border border-black/50 text-[10px] outline-0 rounded-sm h-10"
					/>
				</div>
				<button
					disabled={cart?.data.items.length == 0}
					onClick={() => {
						router.push("/checkout");
					}}
					className="w-full bg-(--color-dark-green) px-2 py-2.5 min-w-20 rounded-sm text-white hover:bg-(--color-accent-green) text-[12px] cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
				>
					{"ادامه فرایند خرید"}
				</button>
			</div>
		</div>
	);
}

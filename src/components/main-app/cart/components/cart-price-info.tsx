import { faNumber } from "@/utils/convert-number-into-persian";
import { GetCartResponse } from "../types";

export default function CartPriceInfo({
	cart,
	setOpenClear,
	anyUpdate,
	handleBatchUpdate,
}: {
	cart: GetCartResponse | undefined;
	setOpenClear: (val: boolean) => void;
	anyUpdate: boolean;
	handleBatchUpdate: () => Promise<void>;
}) {
	return (
		<div className="w-full h-fit bg-white flex flex-col justify-start py-5 rounded-sm gap-5 px-5 shadow shadow-black/5 relative">
			<div
				className={`w-full backdrop-blur-[5px] flex flex-col justify-start items-center gap-2 ${
					!anyUpdate ? "opacity-10" : ""
				}`}
			>
				<button
					disabled={!anyUpdate}
					onClick={() => {
						setOpenClear(true);
					}}
					className={`w-full py-3  text-[10px] lg:text-[12px]  rounded-sm border border-black/10 cursor-pointer transition-all duration-500 ease-in-out ${
						anyUpdate
							? "bg-yellow-700/20 hover:bg-yellow-700/80 text-black  hover:text-white"
							: "bg-black hover:bg-black text-white  hover:text-white"
					}`}
				>
					{"خالی کردن سبد خرید"}
				</button>
				<div className="w-full flex justify-between items-center gap-1">
					<button
						disabled={!anyUpdate}
						onClick={() => {}}
						className={`w-full py-3  text-[10px] lg:text-[12px] rounded-sm border border-black/10 cursor-pointer transition-all duration-500 ease-in-out  ${
							anyUpdate
								? "bg-red-500/20 hover:bg-red-500/80 text-black  hover:text-white"
								: "bg-black hover:bg-black text-white  hover:text-white"
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
								: "bg-black hover:bg-black text-white  hover:text-white"
						}`}
					>
						{"ذخیره تغییرات"}
					</button>
				</div>
			</div>

			<div className="font-semibold text-(--color-accent-green) border-b border-b-black/20 pb-5">
				{"خلاصه سفارش"}
			</div>
			<div className="flex flex-col justify-start items-start gap-2 h-fit pb-10 border-b border-b-black/20">
				<div className="w-full flex justify-between items-center gap-2">
					<span className="text-[12px]">{"جمع مبلغ کالاها"}</span>
					<span>
						{cart ? (
							<span className="flex justify-center items-center gap-1">
								{" "}
								{`${faNumber(cart.data.totalPrice)}`}
								<span className="text-black/50 text-[10px]">{"ریال"}</span>
							</span>
						) : null}
					</span>
				</div>
				<div className="w-full flex justify-between items-center gap-2 text-[12px]">
					<span>{"هزینه ارسال"}</span>
					<span className="text-(--color-accent-green)">
						{cart ? (
							cart.data.totalPrice > 100000000 ? (
								"رایگان"
							) : (
								<span>
									${faNumber(cart.data.totalPrice / 100 + 500000)}{" "}
									<span className="text-black/50 text-[10px]">{"ریال"}</span>
								</span>
							)
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
						{cart && faNumber(cart.data.totalPrice)}{" "}
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
				<button className="w-full bg-(--color-dark-green) px-2 py-2.5 min-w-20 rounded-sm text-white hover:bg-(--color-accent-green) text-[12px] ">
					{"ادامه فرایند خرید"}
				</button>
			</div>
		</div>
	);
}

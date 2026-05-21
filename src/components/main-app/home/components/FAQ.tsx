"use client";

import { useState } from "react";

interface FaqItem {
	question: string;
	answer: string;
}

const faqData: FaqItem[] = [
	{
		question: "نحوه ثبت سفارش چگونه است؟",
		answer:
			"برای ثبت سفارش، کافیست محصول مورد نظر خود را انتخاب کرده، به سبد خرید اضافه کنید و مراحل پرداخت را تکمیل نمایید. پس از تأیید سفارش، ایمیل تأییدیه برای شما ارسال خواهد شد.",
	},
	{
		question: "هزینه ارسال چقدر است و چگونه محاسبه می‌شود؟",
		answer:
			"هزینه ارسال بر اساس وزن، ابعاد و مقصد سفارش محاسبه می‌شود. در صفحه سبد خرید، پس از وارد کردن آدرس، هزینه دقیق ارسال به شما نمایش داده خواهد شد. امکان ارسال رایگان برای خریدهای بالای مبلغ مشخص نیز وجود دارد.",
	},
	{
		question: "مدت زمان تحویل کالا چقدر است؟",
		answer:
			"زمان تحویل کالا بسته به شهر و استان مقصد متفاوت است. معمولاً سفارشات درون شهری طی ۱ تا ۲ روز کاری و سفارشات سایر شهرها طی ۳ تا ۵ روز کاری تحویل داده می‌شوند. پس از ارسال، کد رهگیری برای شما ارسال خواهد شد.",
	},
	{
		question: "آیا محصولات دارای گارانتی هستند؟",
		answer:
			"بله، تمامی محصولات ارائه شده در فروشگاه دارای گارانتی اصالت کالا و گارانتی سلامت فیزیکی هستند. جزئیات مربوط به هر گارانتی در صفحه مشخصات محصول ذکر شده است. برای استفاده از گارانتی، لطفاً شرایط ذکر شده را مطالعه فرمایید.",
	},
	{
		question: "چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟",
		answer:
			'پس از ارسال سفارش، یک کد رهگیری از طریق پیامک یا ایمیل برای شما ارسال می‌شود. با وارد کردن این کد در بخش "رهگیری سفارش" در وب‌سایت، می‌توانید از آخرین وضعیت مرسوله خود مطلع شوید.',
	},
];

export default function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="faq-container w-full h-fit md:h-90 overflow-y-hidden mx-auto my-4 px-4">
			<div className="space-y-4">
				{faqData.map((faq, index) => {
					const isOpen = openIndex === index;
					return (
						<div
							key={index}
							className={`relative bg-(--color-accent-green)/10 border rounded-sm overflow-hidden transition-all duration-300 ease-out ${
								isOpen ? "border-[#d4c7b8]" : "border-[#e1dcd7]"
							}`}
						>
							<button
								onClick={() => toggleFaq(index)}
								className={`w-full text-right py-3 px-6 cursor-pointer relative flex justify-between items-center text-[12px] font-semibold focus:outline-none transition-colors duration-300 ${
									isOpen ? "text-[#a08d6b]" : "text-[#3d4841]"
								}`}
								aria-expanded={isOpen}
							>
								{faq.question}
								<span
									className={`absolute left-6 top-1/2 -translate-y-1/2 transform transition-all duration-300 ease-out text-xl ${
										isOpen ? "text-[#a08d6b]" : "text-[#a08d6b]"
									}`}
								>
									{isOpen ? "-" : "+"}
								</span>
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ease-out ${
									isOpen
										? "max-h-screen opacity-100 px-6 pb-6"
										: "max-h-0 opacity-0 px-6"
								}`}
							>
								<div className="border-t border-[#e1dcd7] pt-4">
									<p className="text-[12px] text-[#5a675f] text-right">
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

import SearchIcon from "@/assets/SVG/search-icon";
import { InputType } from "@/types/inputs-type";

export default function SearchInput(userInput: InputType) {
	return (
		<div className="relative w-full flex flex-row items-center h-10 md:w-80">
			<input
				className={`${
					userInput.extraClasses ? userInput.extraClasses : "ml-10 rounded-full"
				} w-full h-8 border border-[#0000] bg-[#0f3b2e] text-[10px] text-right text-[#f4f4f4] py-2 px-4 pr-10 outline-none placeholder-[#f4f4f4aa] placeholder:px-2 hover:border hover:border-[#c9a667] transition-all ease-in-out duration-500 md:ml-0`}
				type="text"
				name={userInput.name}
				{...(userInput.register || undefined)}
				id={userInput.id || undefined}
				value={userInput.value}
				onChange={userInput.onChange}
				placeholder={userInput.placeholder || "جستجوی ساعت، برند یا مدل..."}
				required
			/>
			<div className="absolute right-4 top-2">
				<SearchIcon />
			</div>
		</div>
	);
}

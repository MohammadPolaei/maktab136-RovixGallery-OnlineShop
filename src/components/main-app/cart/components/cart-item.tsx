import { DeleteIcon } from "@/assets/SVG/dashboard-icons/delete-icon";
import { FavoriteOutlined } from "@/assets/SVG/product-card/favorite-icon";

type Props = {
	name: string;
	color: string;
	dialColor: string;
	images: string[];
	price: number;
};

export default function CartItem({
	name,
	color,
	dialColor,
	images,
	price,
}: Props) {
	return (
		<div className="w-full bg-white rounded-sm py-5 px-10 relative flex flex-row justify-evenly items-center">
			<div className="w-full flex-1">Image</div>
			<div className="flex-4">
				<div>{name}</div>
				<div>
					<span>{color}</span>
					<span>{dialColor}</span>
				</div>
				<div>
					<div>
						<span>قیمت واحد</span>
						<span>{price}</span>
					</div>
					<div>
						<span>تعداد</span>
						<div>action buttons</div>
						<div>
							<span>قیمت کل</span>
							<span>total product price</span>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute top-5 left-5 md:top-10 md:left-10 flex flex-col justify-center items-center gap-3">
				<div>
					<FavoriteOutlined size={18} />
				</div>
				<div>
					<DeleteIcon size={22} />
				</div>
			</div>
		</div>
	);
}

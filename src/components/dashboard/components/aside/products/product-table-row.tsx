import { DeleteIcon } from "@/assets/SVG/dashboard-icons/delete-icon";
import { EditIcon } from "@/assets/SVG/dashboard-icons/edit-icon";
import { Product } from "@/types/product-data-type";
import Image from "next/image";

export default function ProductsTableRow({ product }: { product: Product }) {
	return (
		<tr className="border-b border-(--color-accent-green)/20 hover:bg-(--color-accent-green)/10">
			<td className="p-3">
				<Image
					src={product.images[0]}
					alt={product.name}
					width={50}
					height={50}
					className="rounded"
				/>
			</td>

			<td className="p-3 font-medium">{product.name}</td>

			<td className="p-3">{product.brand}</td>

			<td className="p-3 text-(--color-accent-green) font-bold">
				{product.price.toLocaleString()} ریال
			</td>

			<td className="p-3">{product.stock}</td>

			<td className="p-3">{product.category}</td>

			<td className="p-3">{product.popularity}</td>

			<td className="p-3">
				<div className="flex justify-evenly items-center">
					<EditIcon />
					<DeleteIcon />
				</div>
			</td>
		</tr>
	);
}

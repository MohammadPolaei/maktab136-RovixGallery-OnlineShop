import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useProductMutations } from "../hooks/use-product-mutation";
import { ProductAddSchema, ProductAddSchemaType } from "./product-add-schema";

export const [previews, setPreviews] = useState<string[]>([]);
// edit product

export const { updateProduct, isUpdating, errorUpdating } =
	useProductMutations();

export const {
	register,
	handleSubmit,
	setValue,
	reset,
	formState: { errors },
} = useForm<ProductAddSchemaType>({
	resolver: zodResolver(ProductAddSchema),
	defaultValues: {
		isAuthentic: true,
		isActive: true,
		popularity: 0,
		images: [],
	},
});

export const handleImageChange = (files: FileList | null) => {
	if (!files) return;

	const fileArray = Array.from(files);

	setValue("images", fileArray, {
		shouldValidate: true,
	});

	const urls = fileArray.map((file) => URL.createObjectURL(file));
	setPreviews(urls);
};
useEffect(() => {
	return () => {
		previews.forEach((url) => URL.revokeObjectURL(url));
	};
}, [previews]);

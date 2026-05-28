"use client";

import SingleOrderDetails from "@/components/shared/single-order-details";
import { useParams } from "next/navigation";

export default function OrderDetailPage() {
	const params = useParams<{ id: string }>();
	const id = params.id;
	return <SingleOrderDetails id={id} usageType="user" />;
}

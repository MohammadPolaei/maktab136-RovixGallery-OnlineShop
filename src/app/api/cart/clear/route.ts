// clear all items

import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

const getUserToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

export async function DELETE(req: NextRequest) {
	const token = getUserToken(req);

	const res = await fetch(`${backendUrl}/api/cart/clear/`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await res.json();

	if (!res.ok) {
		return NextResponse.json(
			{ message: "Error clearing cart" },
			{ status: 500 }
		);
	}

	return NextResponse.json(data);
}

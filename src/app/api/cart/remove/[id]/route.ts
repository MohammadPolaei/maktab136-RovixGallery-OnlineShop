// clear all items

import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

const getUserToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const token = getUserToken(req);
	const id = (await params).id;

	const res = await fetch(`${backendUrl}/api/cart/remove/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await res.json();

	if (!res.ok) {
		return NextResponse.json(
			{ message: "Error removing item" },
			{ status: 500 }
		);
	}

	return NextResponse.json(data);
}

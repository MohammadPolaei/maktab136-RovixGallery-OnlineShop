// update all items

import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

const getUserToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const token = getUserToken(req);
	const id = (await params).id;
	const body = await req.json();

	const res = await fetch(`${backendUrl}/api/cart/update/${id}`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	const data = await res.json();

	if (!res.ok) {
		return NextResponse.json(
			{ message: data.message || "Error updating item" },
			{ status: res.status }
		);
	}

	return NextResponse.json(data);
}

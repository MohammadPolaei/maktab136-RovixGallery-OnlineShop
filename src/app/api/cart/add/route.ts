// add to cart

import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

const getUserToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

export async function POST(req: NextRequest) {
	const token = getUserToken(req);
	const body = await req.json();

	const res = await fetch(`${backendUrl}/api/cart/add`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	const data = await res.json();

	if (!res.ok) {
		return NextResponse.json(
			{ message: data.message || "Error adding item" },
			{ status: res.status }
		);
	}

	return NextResponse.json(data);
}

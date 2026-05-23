// get all items
const backendUrl = process.env.BACKEND_URL;

const getUserToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const token = getUserToken(req);

	const res = await fetch(`${backendUrl}/api/cart`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,

			"Content-Type": "application/json",
		},
	});

	const data = await res.json();

	if (!res.ok) {
		return NextResponse.json(
			{ message: "Error getting cart info" },
			{ status: 500 }
		);
	}

	return NextResponse.json(data);
}

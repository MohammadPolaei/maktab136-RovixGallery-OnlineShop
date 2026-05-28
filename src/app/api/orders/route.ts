import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

const getUserToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

// get order
export async function GET(req: NextRequest) {
	const token = getUserToken(req);

	const res = await fetch(`${backendUrl}/api/orders`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,

			"Content-Type": "application/json",
		},
	});

	const data = await res.json();

	if (!res.ok) {
		return NextResponse.json(
			{ message: "Error getting orders info" },
			{ status: 500 }
		);
	}

	return NextResponse.json(data);
}

// add order
export async function POST(req: NextRequest) {
	const token = getUserToken(req);
	const body = await req.json();

	const res = await fetch(`${backendUrl}/api/orders`, {
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
			{ message: "Error adding order" },
			{ status: 500 }
		);
	}

	return NextResponse.json(data);
}

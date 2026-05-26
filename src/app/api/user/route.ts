// app/api/user/route.ts
import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

export async function GET(req: NextRequest) {
	const token = req.cookies.get("access_token")?.value;

	if (!token) {
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}

	try {
		const res = await fetch(`${backendUrl}/api/auth/me`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});

		const data = await res.json();

		if (!res.ok) {
			return NextResponse.json(
				{ message: data.message || "Error getting profile data" },
				{ status: res.status }
			);
		}

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}

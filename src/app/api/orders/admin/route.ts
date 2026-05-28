import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

const getUserToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

export async function GET(req: NextRequest) {
	try {
		const token = getUserToken(req);

		if (!token) {
			return NextResponse.json(
				{ message: "Unauthorized: no token found" },
				{ status: 401 }
			);
		}

		const res = await fetch(`${backendUrl}/api/orders/admin/all`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		const contentType = res.headers.get("content-type") || "";

		let data: unknown = null;

		if (contentType.includes("application/json")) {
			data = await res.json();
		} else {
			const text = await res.text();
			data = { message: text || res.statusText };
		}

		if (!res.ok) {
			return NextResponse.json(
				{
					message: "Error getting admin orders",
					backendStatus: res.status,
					backendResponse: data,
				},
				{ status: res.status }
			);
		}

		return NextResponse.json(data);
	} catch (error) {
		console.error("Route /api/orders/admin error:", error);

		return NextResponse.json(
			{
				message: "Internal server error in admin orders route",
				error: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 }
		);
	}
}

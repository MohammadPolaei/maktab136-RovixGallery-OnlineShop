import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

const getUserToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

export async function GET(req: NextRequest) {
	try {
		if (!backendUrl) {
			return NextResponse.json(
				{ message: "BACKEND_URL is not set" },
				{ status: 500 }
			);
		}

		const token = getUserToken(req);
		if (!token) {
			return NextResponse.json(
				{ message: "Unauthorized: no token found" },
				{ status: 401 }
			);
		}

		const sp = req.nextUrl.searchParams;
		const page = sp.get("page") ?? "1";
		const limit = sp.get("limit") ?? "10";
		const status = sp.get("status") ?? "";

		const url = new URL(`${backendUrl}/api/orders/admin/all`);
		url.searchParams.set("page", page);
		url.searchParams.set("limit", limit);
		url.searchParams.set("status", status);

		const res = await fetch(url.toString(), {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
			},
			cache: "no-store",
		});

		const contentType = res.headers.get("content-type") || "";
		const data = contentType.includes("application/json")
			? await res.json()
			: { message: (await res.text()) || res.statusText };

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
		return NextResponse.json(
			{
				message: "Internal server error in admin orders route",
				error: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 }
		);
	}
}

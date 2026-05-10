import { NextRequest, NextResponse } from "next/server";
const getAdminToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

// ADD
export async function POST(req: NextRequest) {
	try {
		const token = getAdminToken(req);

		const formData = await req.formData();

		const res = await fetch(`${process.env.BACKEND_URL}/api/products`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		});

		const text = await res.text();
		console.log("BACKEND RESPONSE:", text);

		return NextResponse.json(JSON.parse(text), { status: res.status });
	} catch (error) {
		console.error("POST /api/product error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}

export async function GET(req: Request) {
	try {
		const backendUrl = process.env.BACKEND_URL;

		if (!backendUrl) {
			console.error("❌ BACKEND_URL is missing");
			return NextResponse.json(
				{ message: "Server configuration error" },
				{ status: 500 }
			);
		}

		// Extract filters
		const { searchParams } = new URL(req.url);

		const queryString = searchParams.toString();
		const url = `${backendUrl}/api/products${
			queryString ? `?${queryString}` : ""
		}`;

		const res = await fetch(url, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			cache: "no-cache",
		});

		if (!res.ok) {
			return NextResponse.json(
				{ message: "Failed to fetch products" },
				{ status: res.status }
			);
		}

		const data = await res.json();

		return NextResponse.json({ success: true, data }, { status: 200 });
	} catch (error) {
		console.error("🔴 PRODUCT LIST ERROR:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}

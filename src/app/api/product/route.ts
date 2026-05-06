import { NextResponse } from "next/server";

export async function GET() {
	try {
		const backendUrl = process.env.BACKEND_URL;

		if (!backendUrl) {
			console.error("❌ BACKEND_URL is missing");
			return NextResponse.json(
				{ message: "Server configuration error" },
				{ status: 500 }
			);
		}

		const res = await fetch(`${backendUrl}/api/products`, {
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

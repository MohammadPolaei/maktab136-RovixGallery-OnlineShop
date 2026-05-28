import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

type Context = {
	params: Promise<{ id: string }>;
};

export async function GET(req: NextRequest, { params }: Context) {
	try {
		const { id } = await params;

		const token = req.cookies.get("access_token")?.value;

		if (!id) {
			return NextResponse.json(
				{ success: false, message: "order id is required" },
				{ status: 400 }
			);
		}

		if (!backendUrl) {
			return NextResponse.json(
				{ success: false, message: "BACKEND_URL is not defined" },
				{ status: 500 }
			);
		}

		const res = await fetch(`${backendUrl}/api/orders/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...(token ? { Authorization: `Bearer ${token}` } : {}),
			},
			cache: "no-store",
		});

		const contentType = res.headers.get("content-type") ?? "";
		if (!contentType.includes("application/json")) {
			const text = await res.text();
			return new NextResponse(text, {
				status: res.status,
				headers: { "Content-Type": contentType || "text/plain" },
			});
		}

		const data = await res.json();
		return NextResponse.json(data, { status: res.status });
	} catch {
		return NextResponse.json(
			{ success: false, message: "failed getting order details from backend" },
			{ status: 500 }
		);
	}
}

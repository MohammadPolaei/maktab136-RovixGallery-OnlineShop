import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

type Context = {
	params: Promise<{ id: string }>;
};

export async function PUT(req: NextRequest, { params }: Context) {
	try {
		const { id } = await params;
		const payload = await req.json();

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

		const res = await fetch(`${backendUrl}/api/orders/${id}/status`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				...(token ? { Authorization: `Bearer ${token}` } : {}),
			},
			body: JSON.stringify(payload),
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
			{ success: false, message: "failed updating order status from backend" },
			{ status: 500 }
		);
	}
}

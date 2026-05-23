import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const response = await fetch(
			`${process.env.BACKEND_URL}/api/auth/register`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			}
		);

		const result = await response.json();

		if (!response.ok) {
			return NextResponse.json(result, { status: response.status });
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
	}
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		console.log("Sending to Backend:", body); // لاگ برای کنسول ترمینال شما

		const response = await fetch(
			`${process.env.BACKEND_URL}/api/auth/register`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			}
		);

		const result = await response.json();
		console.log("Backend Response:", result); // لاگ پاسخ بک‌اند در کنسول ترمینال

		if (!response.ok) {
			return NextResponse.json(result, { status: response.status });
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Internal API Error:", error); // لاگ خطا
		return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
	}
}

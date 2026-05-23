import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const body = await request.json();

	try {
		const response = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		});

		const result = await response.json();

		if (!response.ok) {
			return NextResponse.json(result, { status: response.status });
		}

		const { token, refreshToken, user } = result.data;

		const cookieStore = await cookies();

		cookieStore.set("access_token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 60 * 15, // 15 دقیقه
			path: "/",
		});

		cookieStore.set("refresh_token", refreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 60 * 60 * 24 * 7, // 7 روز
			path: "/",
		});
		cookieStore.set("role", user.role.toUpperCase(), {
			httpOnly: false,
			path: "/",
		});

		return NextResponse.json({ success: true, user: result.data.user });
	} catch (error) {
		return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
	}
}

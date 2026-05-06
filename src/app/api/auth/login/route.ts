import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();

	const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});

	if (!res.ok) {
		return NextResponse.json(
			{ message: "اطلاعات ورود اشتباه است" },
			{ status: 401 }
		);
	}

	const data = await res.json();
	const { token, refreshToken, user } = data.data;

	const cookieStore = await cookies();

	cookieStore.set("access_token", token, {
		httpOnly: true,
		secure: true,
		path: "/",
	});

	cookieStore.set("refresh_token", refreshToken, {
		httpOnly: true,
		secure: true,
		path: "/",
	});

	cookieStore.set("role", user.role.toUpperCase(), {
		httpOnly: false, // نقش را کلاینت هم باید بخواند
		path: "/",
	});

	return NextResponse.json({ success: true });
}

import { requestAccessToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
	const cookieStore = await cookies();
	const refreshToken = cookieStore.get("refresh_token")?.value;

	if (!refreshToken) {
		return NextResponse.json({ success: false }, { status: 401 });
	}

	const newAccessToken = await requestAccessToken(refreshToken);

	if (!newAccessToken) {
		return NextResponse.json({ success: false }, { status: 401 });
	}

	cookieStore.set("access_token", newAccessToken, {
		httpOnly: true,
		secure: true,
		path: "/",
	});

	return NextResponse.json({ success: true });
}

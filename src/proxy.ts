import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/about-us", "/auth", "/products", "/contact-us"];
const USER_PATHS = ["/user-profile", "/cart"];
const ADMIN_PREFIX = ["/dashboard", "/admin-login"];

export async function proxy(req: NextRequest) {
	const { pathname } = req.nextUrl;

	const accessToken = req.cookies.get("access_token")?.value;
	const refreshToken = req.cookies.get("refresh_token")?.value;
	const role = req.cookies.get("role")?.value || undefined;

	// مسیر home جدا کنترل شود
	if (pathname === "/") return NextResponse.next();

	const isPublic = PUBLIC_PATHS.some((p) => pathname.startsWith(p));
	const isUser = USER_PATHS.some((p) => pathname.startsWith(p));
	const isAdmin = ADMIN_PREFIX.some((p) => pathname.startsWith(p));

	// (1) مسیرهای عمومی
	if (isPublic) return NextResponse.next();

	// (2) تلاش برای رفرش
	if (!accessToken && refreshToken) {
		const refreshRes = await fetch(new URL("/api/token", req.url));
		if (refreshRes.ok) return NextResponse.next();
	}

	// (3) بدون توکن → login
	if (!accessToken) {
		if (isAdmin) {
			return NextResponse.rewrite(new URL("/404", req.url));
		}

		if (!pathname.startsWith("/auth"))
			return NextResponse.redirect(new URL("/auth/login", req.url));
	}

	// (4) نقش‌ها
	if (isAdmin && role !== "ADMIN") {
		return NextResponse.rewrite(new URL("/404", req.url));
	}

	if (isUser && role !== "USER") {
		return NextResponse.redirect(new URL("/auth/login", req.url));
	}

	return NextResponse.next();
}
export const config = {
	matcher: ["/dashboard/:path*", "/user-profile/:path*", "/cart/:path*"],
};

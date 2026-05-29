import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/about-us", "/auth", "/products", "/contact-us"];
const USER_PATHS = ["/user-profile", "/cart", "/payment", "/checkout"];
const ADMIN_PREFIX = ["/dashboard", "/admin-login"];

export async function proxy(req: NextRequest) {
	const { pathname } = req.nextUrl;

	const accessToken = req.cookies.get("access_token")?.value;
	const refreshToken = req.cookies.get("refresh_token")?.value;
	const role = req.cookies.get("role")?.value || undefined;

	if (pathname === "/") return NextResponse.next();

	const isPublic = PUBLIC_PATHS.some((p) => pathname.startsWith(p));
	const isUser = USER_PATHS.some((p) => pathname.startsWith(p));
	const isAdmin = ADMIN_PREFIX.some((p) => pathname.startsWith(p));

	const isAuthRoute = pathname.startsWith("/auth");

	const isLoggedIn = Boolean(accessToken);

	const getHomeForRole = (r?: string) => {
		if (r === "ADMIN") return "/dashboard";
		return "/";
	};

	if (isAuthRoute && isLoggedIn) {
		return NextResponse.redirect(new URL(getHomeForRole(role), req.url));
	}

	if (isPublic) return NextResponse.next();

	if (!accessToken && refreshToken) {
		const refreshRes = await fetch(new URL("/api/token", req.url));

		if (refreshRes.ok) {
			if (isAuthRoute) {
				return NextResponse.redirect(new URL(getHomeForRole(role), req.url));
			}
			return NextResponse.next();
		}
	}

	if (!accessToken) {
		if (isAdmin) {
			return NextResponse.rewrite(new URL("/404", req.url));
		}

		if (!isAuthRoute) {
			return NextResponse.redirect(new URL("/auth/login", req.url));
		}
	}

	if (isAdmin && role !== "ADMIN") {
		return NextResponse.rewrite(new URL("/404", req.url));
	}

	if (isUser && role !== "USER") {
		return NextResponse.redirect(new URL("/auth/login", req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/dashboard/:path*",
		"/user-profile/:path*",
		"/cart/:path*",
		"/payment/:path*",
		"/checkout/:path*",
		"/auth/:path*",
	],
};

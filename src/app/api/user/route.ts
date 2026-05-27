// app/api/user/route.ts
import { UserData } from "@/components/main-app/checkout/components/checkout-layout";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const backendUrl = process.env.BACKEND_URL;

export async function GET(req: NextRequest) {
	const token = req.cookies.get("access_token")?.value;
	if (!token) {
		redirect("/auth/login?callback=/checkout");
	}

	let userData: UserData | null = null;

	try {
		const res = await fetch(`${backendUrl}/api/auth/me`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			cache: "no-store",
		});

		if (res.ok) {
			userData = await res.json();
		} else if (res.status === 401) {
			redirect("/auth/login");
		} else {
			return NextResponse.json(
				{ message: "Failed to fetch products" },
				{ status: res.status }
			);
		}
	} catch (error) {
		console.error("Critical Fetch Error:", error);
	}
	return NextResponse.json({ success: true, data: userData });
}

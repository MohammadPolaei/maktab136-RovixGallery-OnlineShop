import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
	try {
		const cookieStore = await cookies();

		cookieStore.delete("access_token");
		cookieStore.delete("refresh_token");
		cookieStore.delete("role");

		return NextResponse.json(
			{ success: true, message: "Logged out" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("LOGOUT ERROR:", error);
		return NextResponse.json({ message: "Server error" }, { status: 500 });
	}
}

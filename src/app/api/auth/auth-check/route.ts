import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
	const cookieStore = await cookies();

	const token = cookieStore.get("access_token")?.value;
	const role = cookieStore.get("role")?.value;

	if (!token || !role) {
		return NextResponse.json(
			{ isLoggedIn: false, role: null },
			{ status: 401 }
		);
	}

	return NextResponse.json({ isLoggedIn: true, role }, { status: 200 });
}

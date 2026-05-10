import { NextRequest, NextResponse } from "next/server";
const getAdminToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

// DELETE

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const token = getAdminToken(req);

	const res = await fetch(
		`${process.env.BACKEND_URL}/api/products/${params.id}`,
		{
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	const data = await res.json();
	return NextResponse.json(data, { status: res.status });
}

// UPDATE
export async function PUT(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const token = getAdminToken(req);
	const body = await req.json();

	const res = await fetch(
		`${process.env.BACKEND_URL}/api/products/${params.id}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(body),
		}
	);

	const data = await res.json();
	return NextResponse.json(data, { status: res.status });
}

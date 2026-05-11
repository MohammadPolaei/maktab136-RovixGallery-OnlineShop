import { NextRequest, NextResponse } from "next/server";
const getAdminToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

// DELETE

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const token = getAdminToken(req);
	const { id } = await params;

	const res = await fetch(`${process.env.BACKEND_URL}/api/products/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await res.json();

	return NextResponse.json(data);
}

// UPDATE
export async function PUT(
	req: NextRequest,
	context: { params: Promise<{ id: string }> }
) {
	const { id } = await context.params;

	const token = getAdminToken(req);
	const formData = await req.formData();

	const res = await fetch(`${process.env.BACKEND_URL}/api/products/${id}`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: formData,
	});

	const data = await res.json();
	return NextResponse.json(data, { status: res.status });
}

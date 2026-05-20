import { NextRequest, NextResponse } from "next/server";
const getAdminToken = (req: NextRequest) =>
	req.cookies.get("access_token")?.value;

// GET

export async function GET(
	req: NextRequest,
	context: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await context.params;

		const res = await fetch(`${process.env.BACKEND_URL}/api/products/${id}`, {
			next: { revalidate: 60 },
		});

		if (!res.ok) {
			return NextResponse.json(
				{ message: "Product not found" },
				{ status: res.status }
			);
		}

		const data = await res.json();

		return NextResponse.json(data);
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}

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

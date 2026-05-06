export async function requestAccessToken(refreshToken: string) {
	try {
		const res = await fetch(
			`${process.env.BACKEND_URL}/api/auth/refresh-token`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ refreshToken }),
				cache: "no-store",
			}
		);

		if (!res.ok) return null;

		const data = await res.json();
		return data?.data?.token ?? null;
	} catch {
		return null;
	}
}

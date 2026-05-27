export async function getUser() {
	const res = await fetch("/api/user", { method: "GET" });

	if (!res.ok) {
		throw new Error("Failed to fetch user info");
	}
	const data = await res.json();

	return data;
}

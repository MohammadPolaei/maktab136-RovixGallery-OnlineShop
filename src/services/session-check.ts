export const sessionCheck = async () => {
	const res = await fetch("/api/auth/auth-check", {
		method: "GET",
		credentials: "include",
		cache: "no-store",
	});
	if (!res.ok) {
		return { isLoggedIn: false, role: null, status: res.status };
	}

	const body = await res.json();

	return body;
};

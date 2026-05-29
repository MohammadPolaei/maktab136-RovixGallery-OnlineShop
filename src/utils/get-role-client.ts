export function getRoleClient(): string | null {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; "role"=`);
	if (parts.length === 2) {
		return parts.pop()?.split(";").shift() ?? null;
	}
	return null;
}

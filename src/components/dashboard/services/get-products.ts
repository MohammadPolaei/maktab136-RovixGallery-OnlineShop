export default async function getProducts() {
	try {
		const res = await fetch("/api/product");
		const data = await res.json();
		if (!res.ok) {
			console.log("error");
		}

		return data;
	} catch (e) {
		throw e;
	}
}

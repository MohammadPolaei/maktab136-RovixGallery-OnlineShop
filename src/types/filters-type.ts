export interface ProductFilters {
	brandCountry?: string;
	material?: string;
	dialColor?: string;
	color?: string;
	available?: string;
	search?: string;
	brand?: string;
	gender?: string;
	sort?: string;

	page?: number;
	totalPages?: number;
	limit?: number;
}

export interface ProductFiltersSet extends ProductFilters {
	setBrandCountry: (input: string) => void;
	setMaterial: (input: string) => void;
	setBrand: (input: string) => void;
	setColor: (input: string) => void;
	setDialColor: (input: string) => void;
	setGender: (input: string) => void;
	setSort: (input: string) => void;
	setAvailable: (input: string) => void;
}

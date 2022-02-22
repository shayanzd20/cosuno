exports.applyFilters = (companies = [], searchTerm, filters) => {
	let updatedList = companies;

	// Search Filter
	if (searchTerm) {
		updatedList = updatedList.filter((corp) => corp.company.toLowerCase().includes(searchTerm.toLowerCase()));
	}

	// Checkbox Filter
	if (filters.length) {
		updatedList = updatedList.filter((el) => {
			return el.specialties.filter((f) => filters.includes(f)).length === filters.length;
		});
	}

	return updatedList;
};

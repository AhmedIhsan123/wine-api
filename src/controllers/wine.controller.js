import * as wineService from "../services/wine.service.js";

// Method to get all wines
export const getAllWines = (req, res) => {
	// Get the wines list from services
	const winesList = wineService.getAll();

	// Return the data to the client
	return res.status(200).json({ count: winesList.length, data: winesList });
};

// Method to get a wine by the Id
export const getWineById = (req, res) => {
	// Capture the ID from the params
	const { id } = req.params;

	// Search for the wine in the service
	const wine = wineService.getById(Number(id));

	// Return whether a wine was found or not
	return wine
		? res.status(200).json(wine)
		: res
				.status(404)
				.json({ message: `Wine with ID: ${id} not found!`, data: null });
};

// Method for creating/adding a wine
export const createWine = (req, res) => {
	// Get the name and year from the body
	const { name, year } = req.body;

	if (!name || !year) {
		return res
			.status(400)
			.json({ message: "Wine name and year are required.", data: null });
	}

	// Create new wine
	const newWine = wineService.create({ name, year });

	// Return a good status
	return res
		.status(201)
		.json({ message: "Wine created successfully", data: newWine });
};

export const updateWine = (req, res) => {
	// Get the ID, name and year from the request body and params
	const id = Number(req.params.id);
	const { name, year } = req.body;

	// Put NEEDS name and year
	if (!name || !year) {
		return res
			.status(400)
			.json({ message: "Put REQUIRES both wine name and year.", data: null });
	}

	// Update the wine
	const updatedWine = wineService.update(id, { name, year });

	// Return the appropriate response based on updatedWine
	return updatedWine
		? res
				.status(200)
				.json({ message: "Wine updated successfully", data: updatedWine })
		: res
				.status(404)
				.json({ message: `Wine with ID ${id} not found.`, data: null });
};

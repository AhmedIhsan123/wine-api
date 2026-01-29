import * as service from "../services/wine.service.js";

// Method to get all wines
export const getAllWines = (req, res) => {
	// Get the wines list from services
	const winesList = service.getAll();
	console.log(winesList);

	// Return the data to the client
	return res.status(200).json({ count: winesList.length, data: winesList });
};

// Method to get a wine by the Id
export const getWineById = (req, res) => {
	// Capture the ID from the params
	const { id } = req.params;

	// Search for the wine in the service
	const wine = service.getById(Number(id));

	// Return whether a wine was found or not
	return wine
		? res.status(200).json(wine)
		: res
				.status(404)
				.json({ message: `Wine with ID: ${id} not found!`, data: null });
};

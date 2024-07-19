import apartmentModel from "../../database/models/apartment.model.js";

export const getAllApartments = async (req, res) => {
  const result = await apartmentModel.findAll();
  res.json(result);
};

export const getApartmentById = async (req, res) => {
  const result = await apartmentModel.findByPk(req.params.apartmentId, {
    attributes: { exclude: "id" },
  });
  res.json(result);
};

export const addApartment = async (req, res) => {
  const result = await apartmentModel.create(req.body);
  res.json(result);
};

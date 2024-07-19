import apartmentModel from "../../database/models/apartment.model.js";

export const checkApartmentMandatoryFields = async (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.address ||
    !req.body.totalLength ||
    !req.body.price ||
    !req.body.bedrooms ||
    !req.body.bathrooms
  ) {
    return res
      .status(404)
      .json({ message: "Please provide all mandatory fields" });
  }
  next();
};

//middleware to check apartmentId
export const checkApartmentId = async (req, res, next) => {
  const apartmentId = req.params.apartmentId;
  // Check if the apartment with the specified ID exists
  const apartment = await apartmentModel.findByPk(apartmentId);

  if (!apartment) {
    return res
      .status(404)
      .json({ message: "This apartment ID does not exist." });
  }
  next();
};

//middleware to check that name is unique in create
export const checkNameUniqueness = async (req, res, next) => {
  const apartmentName = req.body.name;
  const apartment = await apartmentModel.findOne({
    where: { name: apartmentName },
  });

  if (apartment) {
    return res
      .status(404)
      .json({ message: "This apartment name already exists." });
  }
  next();
};

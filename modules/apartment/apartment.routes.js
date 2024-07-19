import express from "express";
import {
  addApartment,
  getAllApartments,
  getApartmentById,
} from "./apartment.controllers.js";
import {
  checkApartmentId,
  checkApartmentMandatoryFields,
  checkNameUniqueness,
} from "./apartment.middlewares.js";

const apartmentRouter = express.Router();

apartmentRouter
  .route("/")
  .get(getAllApartments)
  .post(checkApartmentMandatoryFields, checkNameUniqueness, addApartment);
apartmentRouter.route("/:apartmentId").get(checkApartmentId, getApartmentById);

export default apartmentRouter;

import express from "express";
import sequelize from "./database/dbCon.js";
import apartmentRouter from "./modules/apartment/apartment.routes.js";

const app = express();
const port = 3001;

sequelize.sync();

app.use(express.json());
app.use("/apartments", apartmentRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));

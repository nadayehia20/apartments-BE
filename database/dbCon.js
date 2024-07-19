import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgresql://umfkwxeco8qywqns07to:6ViypMBrHh9QeGiucpD8LsFPDu9tyr@bnwuqxp37nkrp6w3gqtx-postgresql.services.clever-cloud.com:50013/bnwuqxp37nkrp6w3gqtx"
);

sequelize
  .authenticate()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("Unable to connect to the database:", err));

export default sequelize;

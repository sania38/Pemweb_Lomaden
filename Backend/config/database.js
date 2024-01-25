import { Sequelize } from "sequelize";

const db = new Sequelize("kost", "root", "380747", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

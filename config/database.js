import { Sequelize } from "sequelize";

const sequelize = new Sequelize("todo", "root", "sifre", {
    host: "localhost",
    dialect: "mysql",
    logging: false, // Logları devre dışı bırakır
});

export default sequelize;

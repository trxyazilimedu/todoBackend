import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bkystodo", "bkystodo", "j47~s5i4I", {
    host: "cloud.trxyazilim.com",
    dialect: "mysql",
    logging: false, // Logları devre dışı bırakır
});

export default sequelize;

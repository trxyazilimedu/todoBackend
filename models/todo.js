import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Todo = sequelize.define("Todo", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

export default Todo;

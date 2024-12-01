import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import sequelize from "./config/database.js";
import { serveSwaggerDocs } from "./config/swagger.js";

const app = express();

// CORS middleware (Her yere izin ver)
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/todos", todoRoutes);

// Swagger
serveSwaggerDocs(app, 3000);

// Veritabanını başlat ve server çalıştır
sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Database connected.");
        app.listen(3000, () => console.log("Server running on http://localhost:3000"));
    })
    .catch((error) => console.error("Database connection failed:", error));

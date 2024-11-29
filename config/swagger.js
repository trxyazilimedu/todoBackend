import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Todo App API",
            version: "1.0.0",
            description: "BKYS Ve Siber Güvenlik Topluluğu Yarışması İçin Hazırlanmış bir Todo Backend",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local server",
            },
        ],
    },
    apis: ["./routes/*.js"], // Route dosyaları
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export const serveSwaggerDocs = (app, port) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
};

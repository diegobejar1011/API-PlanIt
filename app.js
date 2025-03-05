"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const conn_1 = require("./core/data/mysql/application/conn");
const IndexRouter_1 = require("./core/IndexRouter");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 3000;
app.set("PORT", port);
app.use("/api", IndexRouter_1.indexRouter);
app.listen(app.get("PORT"), () => {
    console.log("API PlanIt running in server...");
});
conn_1.db.connect()
    .then(() => console.log("Conexión exitosa a la base de datos..."))
    .catch((error) => console.log(error));

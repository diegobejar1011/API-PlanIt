import express from "express";
import cors from "cors";
import { db } from "./core/data/mysql/application/conn";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.set("PORT", port);

app.listen(app.get("PORT"), () => {
    console.log("API PlanIt running in server...")
});

db.connect()
.then(() => console.log("Conexión exitosa a la base de datos..."))
.catch((error) => console.log(error))
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.set("PORT", port);

app.listen(app.get("PORT"), () => {
    console.log("API PlanIt running in server...")
});
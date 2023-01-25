import express from "express";
import clients from "../routes/apis/clients/clients";
const app = express();

app.use("/clients", clients);

app.listen(3000, () => console.log("Rodou!"));

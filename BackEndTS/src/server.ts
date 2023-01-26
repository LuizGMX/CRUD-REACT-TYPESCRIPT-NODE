import express from "express";
import router from "./apis/routes";

const app = express();

app.use(router);

app.listen(3000, () => console.log("Rodou!"));

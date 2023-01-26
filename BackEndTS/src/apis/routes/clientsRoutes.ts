import { Router } from "express";
import ClientController from "../controllers/ClientController";

const clientRoutes = Router();
const clientController = new ClientController();

clientRoutes.get("/clients", clientController.index);
clientRoutes.get("/clients/:id", clientController.show);
clientRoutes.post("/clients", clientController.create);
clientRoutes.patch("/clients/:id", clientController.update);
clientRoutes.delete("/clients/:id", clientController.delete);

export default clientRoutes;

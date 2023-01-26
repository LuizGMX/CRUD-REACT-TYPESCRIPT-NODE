import { Router } from "express";

import clientRouter from "../routes/clientsRoutes";

const router = Router();

router.use(clientRouter);

export default router;

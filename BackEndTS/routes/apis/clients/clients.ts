import { Router, Response, Request } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ tipo: "get" });
});

router.post("/", (req: Request, res: Response) => {
  res.json({ tipo: "post" });
});

router.patch("/", (req: Request, res: Response) => {
  res.json({ tipo: "patch" });
});

router.delete("/", (req: Request, res: Response) => {
  res.json({ tipo: "delete" });
});

export default router;

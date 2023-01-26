import { Response, Request } from "express";

class ClientController {
  async index(req: Request, res: Response) {
    res.status(200).json({ status: "index success" });
  }

  async show(req: Request, res: Response) {
    res.status(200).json({ status: "show success" });
  }

  async create(req: Request, res: Response) {
    res.status(200).json({ status: "create success" });
  }

  async update(req: Request, res: Response) {
    res.status(200).json({ status: "update success" });
  }

  async delete(req: Request, res: Response) {
    res.status(200).json({ status: "delete success" });
  }
}

export default ClientController;

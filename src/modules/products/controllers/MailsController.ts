import { Request, Response } from "express";
import CreateMailService from "../services/CreateMailService";

export default class MailsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const createMail = new CreateMailService();

    const mail = await createMail.execute({ email });

    return response.json(mail);

  }
}

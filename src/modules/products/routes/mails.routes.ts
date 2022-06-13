import { Router } from "express";
import MailsController from "../controllers/MailsController";

const mailsRouter = Router();
const mailsController = new MailsController();

mailsRouter.post('/', mailsController.create);

export default mailsRouter;

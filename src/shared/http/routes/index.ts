import { Router } from "express";
import mailsRouter from "@modules/products/routes/mails.routes";

const routes = Router();

routes.use('/emails', mailsRouter);

routes.get('/', (request, response) => {
  return response.json({
    message: 'Mail Application Rest-API'
  });
});

export default routes;

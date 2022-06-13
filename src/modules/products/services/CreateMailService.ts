import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Mail from "../typeorm/entities/Mail";
import { MailRepository } from "../typeorm/repositories/MailsRepository";

interface IRequest {
  email: string;
}

class CreateMailService {
  public async execute({ email }: IRequest): Promise<Mail> {
    const mailRepository = getCustomRepository(MailRepository);
    const mail = await mailRepository.create({ email, });
    await mailRepository.save(mail);

    return mail;
  }
}
export default CreateMailService;

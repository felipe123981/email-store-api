import { EntityRepository, Repository } from "typeorm";
import Mail from "../entities/Mail";

@EntityRepository(Mail)
export class MailRepository extends Repository<Mail> {
  public async findByMail(email: string): Promise<Mail | undefined> {
    const mail = this.findOne({
      where: {
        email,
      },
    });
    return mail;
  }
}

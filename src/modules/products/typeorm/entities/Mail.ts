import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('mails')
class Mail{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;
}

export default Mail;

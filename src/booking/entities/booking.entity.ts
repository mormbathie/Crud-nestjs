import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('booking')
export class Booking {
   @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

}

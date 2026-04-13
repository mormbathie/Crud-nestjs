import { User } from "src/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    operateur: string;
    @Column()
    montant: number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updateDate: Date;
    @ManyToOne(() => User, (user) => user.transactions, { onDelete: 'CASCADE' })
    user: User;
}

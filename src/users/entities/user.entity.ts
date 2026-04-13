import { Transaction } from "src/transactions/entities/transaction.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column({unique: true})
    username: string;
    @Column()
    password: string;
    @Column()
    isActive: boolean;
    @OneToMany(() => Transaction, (transaction) => transaction.user)
    transactions: Transaction[];
}

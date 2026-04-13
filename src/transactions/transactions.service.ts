import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(@InjectRepository(Transaction) private transactionRepository: Repository<Transaction>) { }
  async create(createTransactionDto: CreateTransactionDto) {
    const {userId, ...data} = createTransactionDto 

    const transaction =  this.transactionRepository.create({...data, user: { id: userId },});
    return this.transactionRepository.save(transaction);


  }

  findAll() {
    return this.transactionRepository.find(
      {
        relations:['user'],
      }
    );
    
  }

  findOne(id: number) {
    const transaction = this.transactionRepository.findOne({ where: { id } });
    if (!transaction) {
      return "Transaction not found";
    }
    return transaction;
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.transactionRepository.findOne({ where: { id } });
    if (!transaction) {
      return "Transaction not found";
    }
    Object.assign(transaction, updateTransactionDto);
    const updated = await this.transactionRepository.save(transaction);
    return updated;

  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}

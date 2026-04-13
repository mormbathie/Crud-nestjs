import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BookingModule } from './booking/booking.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './transactions/transactions.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';


@Module({

  imports: [
    UsersModule,
    BookingModule,
    TransactionsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nestuser',
      password: '1234',
      database: 'crud',
      synchronize: true,
      autoLoadEntities: true
    }),
    AuthModule,

    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}

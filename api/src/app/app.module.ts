import { Module } from '@nestjs/common';
import { AuthModule } from '../modules/auth/auth.module';
import { UserModule } from '../modules/user/user.module';
import { TransactionModule } from '../modules/transaction/transaction.module';
import { BudgetModule } from '../modules/budget/budget.module';

@Module({
  imports: [AuthModule, UserModule, TransactionModule, BudgetModule],
})
export class AppModule {}

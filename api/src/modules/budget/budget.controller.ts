import { Controller, Get } from '@nestjs/common';
import { BudgetService } from './budget.service';

@Controller('budgets')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Get()
  list() {
    return this.budgetService.list();
  }
}

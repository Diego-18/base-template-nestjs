import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskService } from './task.service';

@Module({
  providers: [TaskService],
  controllers: [TasksController],
})

export class TaskModule{}
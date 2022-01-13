import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  findAll(): string {
    return this.taskService.findAll();
  }

  /**
   *
   * @param id  id de la tarea
   * @returns  retorna una tarea
   */
  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    return this.taskService.findOne(id);
  }

  /**
   *
   * @param data    datos de la tarea
   * @returns    retorna una tarea
   */
  @Post()
  create(@Body() data: CreateTaskDTO) {
    return this.taskService.create(data);
  }

  @Put()
  update(@Body() data: UpdateTaskDTO) {
    return this.taskService.update(data);
  }

  @Delete()
  delete(@Param('id', ParseIntPipe) id: number): string {
    return this.taskService.delete(id);
  }
}

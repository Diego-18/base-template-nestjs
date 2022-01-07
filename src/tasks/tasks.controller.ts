import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  PartialIntPipe,
} from '@nestjs/common';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  findAll(): string {
    return 'Hello from done';
  }

  /**
   *
   * @param id  id de la tarea
   * @returns  retorna una tarea
   */
  @Get('/:id')
  findOne(@Param('id', PartialIntPipe) id: number): string {
    return 'Su cedula de identidad es ' + id;
  }

  /**
   *
   * @param data    datos de la tarea
   * @returns    retorna una tarea
   */
  @Post()
  create(@Body() data: CreateTaskDTO) {
    return data;
  }

  @Put()
  update(@Body() data: UpdateTaskDTO) {
    return data;
  }

  @Delete()
  delete(@Body() data: any) {
    return data;
  }
}

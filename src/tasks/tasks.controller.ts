import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  HttpStatus,
  HttpCode,
  Inject,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';

import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';
import config from '../config';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(
    private taskService: TaskService, 
    @Inject(config.KEY) private configService: ConfigType<typeof config>, 
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    console.log(this.configService.secretKey);
    return {
      success: true,
      task: this.taskService.findAll(),
    };
  }

  /**
   *
   * @param id  id de la tarea
   * @returns  retorna una tarea
   */
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return {
      success: true,
      task: this.taskService.findOne(id),
      message: 'Task updated successfully',
    };
  }

  /**
   *
   * @param data    datos de la tarea
   * @returns    retorna una tarea
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: CreateTaskDTO) {
    return {
      success: true,
      task: this.taskService.create(data),
      message: 'Task created successfully',
    };
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateTaskDTO) {
    this.taskService.update(id, data);
    return {
      success: true,
      message: 'Task updated successfully',
    };
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id', ParseIntPipe) id: number) {
    this.taskService.delete(id);
    return {
      success: true,
      message: 'Task removed successfully',
    };
  }
}

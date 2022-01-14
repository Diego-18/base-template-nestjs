import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { TaskEntity } from './entity/task.entity';

@Injectable()
export class TaskService {
  private tasks: TaskEntity[] = [];

  findAll(): TaskEntity[] {
    return this.tasks;
  }

  findOne(id: number) {
    const findTask: TaskEntity = this.tasks.find((task) => task.id === id);
    if (!findTask) {
      throw new NotFoundException('task not found');
    }
    return findTask;
  }

  create(data: CreateTaskDTO): TaskEntity {
    const newTask: TaskEntity = { id: this.tasks.length + 1, ...data };
    this.tasks.unshift(newTask);
    return newTask;
  }

  update(taskID: number, data: UpdateTaskDTO) {
    const findTask: number = this.tasks.findIndex((task) => task.id === taskID);
    console.log(findTask);
    if (findTask === -1){
      throw new NotFoundException('Task not found');
    }
    this.tasks[findTask] = { ...this.tasks[findTask], ...data };
  }

  delete(id: number) {
    const findTask: number = this.tasks.findIndex((task) => task.id === id);
    if (findTask === -1) {
      throw new NotFoundException('No se encontro la tarea');
    }
    return (this.tasks = this.tasks.filter((task) => task.id !== id));
  }
}

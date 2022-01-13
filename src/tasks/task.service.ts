import { Injectable } from '@nestjs/common';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';

@Injectable()
export class TaskService {
  findAll(): string {
    return 'Hello from done';
  }

  findOne(id: number) {
    return 'Su cedula de identidad es ' + id;
  }

  create(data: CreateTaskDTO) {
    return data;
  }

  update(data: UpdateTaskDTO) {
    return data;
  }

  delete(id: number) {
    return 'Registro numero:' + id + ' eliminado';
  }
}

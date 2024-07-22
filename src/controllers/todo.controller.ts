import { Controller, Get } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { SelectTodo } from '../db/schema';

@Controller('/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Promise<SelectTodo[]> {
    return this.todoService.getAll;
  }
}

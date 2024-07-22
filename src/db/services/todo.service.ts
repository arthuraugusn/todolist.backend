import { Injectable } from '@nestjs/common';
import { SelectTodo, todo } from '../schema';
import { db } from '../db';

@Injectable()
export class TodoService {
  getAll: Promise<SelectTodo[]> = db.select().from(todo);
}

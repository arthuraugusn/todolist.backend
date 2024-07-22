import { Injectable } from '@nestjs/common';
import { SelectTodo, todo } from '../db/schema';
import { db } from '../db/db';

@Injectable()
export class TodoService {
  getAll: Promise<SelectTodo[]> = db.select().from(todo);
}

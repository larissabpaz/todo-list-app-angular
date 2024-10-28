import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://localhost:5000/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTask(task: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, task);
  }

  updateTask(task: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

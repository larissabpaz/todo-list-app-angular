import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model'; 

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://localhost:7205/api/Tasks'; 

  constructor(private https: HttpClient) {}

  getTasks(): Observable<Todo[]> {
    return this.https.get<Todo[]>(this.apiUrl);
  }

  addTask(task: Todo): Observable<Todo> {
    return this.https.post<Todo>(this.apiUrl, task);
  }

  updateTask(task: Todo): Observable<Todo> {
    return this.https.patch<Todo>(`${this.apiUrl}/${task.id}`, task); 
  }

  deleteTask(id: number): Observable<void> {
    return this.https.delete<void>(`${this.apiUrl}/${id}`); 
  }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { TodoFormComponent } from "../todo-form/todo-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    tasks: Todo[] = [];
    selectedTask: Todo | null = null;
  
    constructor(private taskService: TodoService) {}
  
    ngOnInit(): void {
      this.loadTasks();
    }
  
    loadTasks() {
      this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }
  
    onAddTask() {
      this.selectedTask = { id: 0, title: '', description: '', status: 'pending' };
    }
  
    onEdit(task: Todo) {
      this.selectedTask = { ...task };
    }
  
    onDelete(id: number) {
      this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
    }
  
    onSave(task: Todo) {
      if (task.id) {
        this.taskService.updateTask(task).subscribe(() => this.loadTasks());
      } else {
        this.taskService.addTask(task).subscribe(() => this.loadTasks());
      }
      this.selectedTask = null;
    }
  
    onCancel() {
      this.selectedTask = null;
    }
}

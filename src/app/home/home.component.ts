import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { TodoFormComponent } from "../todo-form/todo-form.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Todo[] = [];
  newTask: Todo = { id: 0, title: '', description: '', status: 'pendente', type: '' };
  selectedTask: Todo | null = null;
  mode: 'list' | 'add' = 'list';
  searchQuery: string = '';

  constructor(private taskService: TodoService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks.map(task => ({ ...task, showEdit: false }));
    });
  }

  changeMode(mode: 'list' | 'add') {
    this.mode = mode;
    if (mode === 'add') {
      this.selectedTask = { id: 0, title: '', description: '', status: 'pendente', type: '' };
    } else {
      this.selectedTask = null;
    }
  }

  onEdit(task: Todo) {
    this.selectedTask = { ...task };
    this.changeMode('add');
  }

  onDelete(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  onSave(task: Todo) {
    if (task.id) {
      this.taskService.updateTask(task).subscribe(() => this.loadTasks());
    } else {
      this.taskService.addTask(task).subscribe(() => {
        this.loadTasks();
        this.changeMode('list');
      });
    }
  }

  get filteredTasks(): Todo[] {
    return this.tasks.filter(task =>
      (task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      task.type.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      task.status.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }

  toggleEdit(task: Todo) {
    task.showEdit = !task.showEdit;
  }
}

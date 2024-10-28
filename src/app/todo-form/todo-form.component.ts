import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css' ] 
})
export class TodoFormComponent {
  @Input() task: Todo = { id: 0, title: '', description: '', status: 'pending' };
  @Output() save = new EventEmitter<Todo>();
  @Output() cancel = new EventEmitter<void>();

  onSubmit() {
    this.save.emit(this.task);
  }

  onCancel() {
    this.cancel.emit();
  }
}

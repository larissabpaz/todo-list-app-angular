import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onSave($event: Todo) {
throw new Error('Method not implemented.');
}
onEdit(_t9: any) {
throw new Error('Method not implemented.');
}
onDelete(arg0: any) {
throw new Error('Method not implemented.');
}
  title = 'todo-list-app-angular';
selectedTask: any;
}

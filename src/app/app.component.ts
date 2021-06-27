import { Component } from '@angular/core';
import { TodosComponent } from './MyComponent/todos/todos.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list';
}

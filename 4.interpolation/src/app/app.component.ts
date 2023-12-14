import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'String Interpolation';

  username: string = 'Anand Vishwakarma';
  age: number = 22;
}

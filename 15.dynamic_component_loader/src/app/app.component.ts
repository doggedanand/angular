import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '15.dynamic_component_loader';
  data = [
    {
      id: 1,
      Name: 'Student Info',
    },
    {
      id: 2,
      Name: 'Parent Info',
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PassDataToAChildComponent';

  data = {
    name: 'Anand Vishwakarma',
    age: 22,
    gender: 'Male',
    address: 'Jalalabad!',
  };
}

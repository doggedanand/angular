import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: `<h1> Welcome to {{title}}!</h1>
  // <button (click)="incriment()>Incriment</button>
  // <button (click)="decriment()">Decriment</button>
  // <app-child-component [count]="Counter"></app-child-component>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PassDataToAChildComponent';
  // Counter = 5;

  // incriment() {
  //   this.Counter++;
  // }
  // decriment() {
  //   this.Counter--;
  // }
  // data =5
  data = {
    name: 'Anand Vishwakarma',
    age: 22,
    gender: 'Male',
    address: 'Jalalabad!',
  };
}

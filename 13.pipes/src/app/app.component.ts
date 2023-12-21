import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '13.pipes';

  birthday = new Date(2002, 8, 27);
  address:string="Jalalabad "
  designation:string="Jr.Developer"
}

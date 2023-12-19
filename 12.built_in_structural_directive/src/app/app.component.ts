import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '12.built_in_structural_directive';
  // used ngIf directive in html file
  isLoggedIn: boolean = false;
  username: string = 'anand!';
  // used ngFor directive in html file
  items: string[] = ['Item1', 'Item2', 'Item3'];
  // used ngSwitch directive in html file
  userType: string = 'user';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '11.built_in_attribute_directive';
  // used ngClass directive in html file
  classData: any = 10;
  isSpecial: boolean = true;
  // used ngStyle directive in html file
  styleData: any = 11;
  fontSize: number = 50;
  fontColor: string = 'blue';
  // used ngModel directive in html file
  username:string=""
}

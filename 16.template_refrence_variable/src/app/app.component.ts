import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '16.template_refrence_variable';

  getTheValue(value: string) {
    alert(value);
  }
}

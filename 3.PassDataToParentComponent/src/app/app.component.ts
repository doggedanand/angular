import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PassDataToParentComponent';
  data = 'Type your name';
  updateData(item: string) {
    console.log(item);
    this.data = item;
  }
}

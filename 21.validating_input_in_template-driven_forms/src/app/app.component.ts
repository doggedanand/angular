import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '21.validating_input_in_template-driven_forms';

  login(data: any) {
    console.log("Form Submitted:", data);

  }
}

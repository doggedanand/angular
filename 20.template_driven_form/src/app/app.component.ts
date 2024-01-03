import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '20.template_driven_form';

  login(form:any){
    console.log(form.value);
    
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '20.template_drive_form';
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: [''],
      email: ['']
    });
  }
  onSubmit() {
     
    console.log('Form data:', this.myForm.value);
  }
}

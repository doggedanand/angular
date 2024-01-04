import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {


    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', Validators.required)
    });
  }

  login(formData: any) {
    console.log(formData.value);

  }

  get email() {
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password')
  }
 
}



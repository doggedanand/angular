import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {


    this.loginForm = this.fb.group({
      email: ['rd.anandv@gmail.com', [Validators.required, Validators.minLength(4)]],
      password: ['']
    });
  }

  login(formData: any) {
    console.log(formData.value);

  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}



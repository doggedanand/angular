import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      gender: new FormControl('', [Validators.required])
    })
  }
  get name() {
    return this.registerForm.get('name')
  }
  get email() {
    return this.registerForm.get("email")
  }
  get username() {
    return this.registerForm.get('username')
  }
  get password() {
    return this.registerForm.get('password')
  }
  get confirmpassword() {
    return this.registerForm.get('confirmpassword')
  }
  get gender() {
    return this.registerForm.get('gender')
  }

}

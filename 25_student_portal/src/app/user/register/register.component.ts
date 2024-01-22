import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private _userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      gender: new FormControl('', [Validators.required]),
      isLogin: new FormControl(false)
    });
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

  onSubmit(form: any) {
    console.log(form);
    this._userService.postUser(form).
      subscribe((res) => {
        if (res) {

          alert("User Added!");
          this.registerForm.reset();
          this.router.navigate(['/login']);
        }
      },
        (err) => {
          console.log(err);

        })

  }

}

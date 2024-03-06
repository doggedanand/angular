import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  allUser: any;
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('')
    })
    // this.showUserData();
  }
  get email() {
    return this.loginForm.get("email")
  }
  get password() {
    return this.loginForm.get("password")
  }



  showUserData() {
    this.userService.getAllUserData().
      subscribe((res) => {
        this.allUser = res;
        console.log("all user data:", res);
      })
  }

  onLogin(userData: any) {

    this.userService.loginUser(userData)
      .subscribe(res => {
        console.log("res after ", res);
        if (res && res.success === true) {
          console.log('res', res)

          alert(res.message);
          const userJSON = JSON.stringify(res.user);
          localStorage.setItem('user', userJSON);
          this.router.navigate(['/dashboard']);
          console.log(userJSON);
        } else {
          alert("User credentialnot matched. Try again!");
        }
      }, (error) => {
        console.log('error by backend', error);
        if (error && error.status === 401) {
          alert("Invalid credentials. Try again!");
        } else {
          console.error("Error:", error);
          alert("Something went wrong. Please try again later.");
        }
      }
      );


  }

}

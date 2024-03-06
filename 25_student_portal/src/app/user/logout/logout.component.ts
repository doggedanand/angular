import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout() {

    const result = confirm("Are you sure want to logout.");
    if (result) {

      console.log("user data", localStorage.getItem("user"));

      localStorage.clear();
      // console.log(localStorage.getItem("user"));
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}

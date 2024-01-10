import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  users: any = ""
  constructor(private _userServiece: UserService) { }

  ngOnInit(): void {
    this.fetchUser()
  }
  fetchUser() {
    this._userServiece.getUser()
      .subscribe((data) => {
        console.log(data)
        this.users = data
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  users: Iuser[] = []
  newUser: any = {  name: '', age: 0, gender: '', address: '', designation: '' };

  constructor(private _userServiece: UserService) { }

  ngOnInit(): void {
    this.fetchAllUser()
  }


  fetchAllUser() {
    this._userServiece.getAllUser()
      .subscribe((data: Iuser[]) => {
        console.log(data)
        this.users = data
      })
  }

  postUser() {
     
    this._userServiece.addUser(this.newUser)
      .subscribe((response: any) => {
        console.log('User added successfully', response);

        this.fetchAllUser();
      });
  }

}

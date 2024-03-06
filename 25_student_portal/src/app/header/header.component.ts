import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedOption: string = "Login";
  user!: any;
  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {

    this.user = this._userService.isLoggedInStatus();
  }



}

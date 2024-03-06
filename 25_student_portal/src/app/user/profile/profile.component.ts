import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any
  constructor() { }

  ngOnInit(): void {
    this.showUserData();
    // this.refreshPage();
  }

  showUserData() {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      this.user = JSON.parse(userJSON);
    }
  }

  // refreshPage() {
  //   this.location.reload();
  // }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Iuser } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  myForm!: FormGroup;
  users: Iuser[] = []

  constructor(private _userServiece: UserService) { }

  ngOnInit(): void {
    this.fetchAllUser();

    this.myForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
      designation: new FormControl('')
    });

  };
  // Get All user record
  fetchAllUser() {
    this._userServiece.getAllUser()
      .subscribe((data: Iuser[]) => {
        console.log(data)
        this.users = data;
      });
  };
  // Add user record
  onPost(userRecord: Iuser) {
    console.log('userRecord', userRecord)
    alert('Record Added Successfully!')

    this._userServiece.addUser(userRecord)
      .subscribe((response: any) => {
        console.log('User added successfully', response);
        this.fetchAllUser();
        this.myForm.reset();
      });

  };
  // Delete user record
  onDelete(userRecord: Iuser) {
    let cnfDelete = confirm("Want to delete?");
    if (cnfDelete) {

      this._userServiece.removeUser(userRecord)
        .subscribe((data: Iuser
        ) => {
          this.users = this.users.filter((u) => u.id !== data.id);

        })
    }

  }

  // // Edit the user record
  // onEdit(userEdit: Iuser) {
  //   this.myForm.patchValue(userEdit)
  // }
}

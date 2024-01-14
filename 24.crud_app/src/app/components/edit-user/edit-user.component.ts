import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  updateForm!: FormGroup;
  user!: Iuser;
  constructor(private _userService: UserService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Initialization the form
    this.updateForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
      designation: new FormControl('')
    })


    this.route.params.subscribe((params) => {
      const userId = params['id'];
      console.log("user Id ", userId);
      this._userService.getUserById(userId)
        .subscribe((u: Iuser) => {
          this.user = u;
          this.initializeForm();
        })

    })

  }

  initializeForm(): void {
    this.updateForm = new FormGroup({
      name: new FormControl(this.user.name),
      age: new FormControl(this.user.age),
      gender: new FormControl(this.user.gender),
      address: new FormControl(this.user.address),
      designation: new FormControl(this.user.designation),

    });
  }


  onEdit(val: Iuser) {
    console.log("val of edit form", val);

    this._userService.updateUser(this.user.id, val).


      subscribe((d) => {
        if (d) {
          alert("User Updated!");
          this.router.navigate(['/'])
        }
        console.log("updated data", d);

      })
  }
}

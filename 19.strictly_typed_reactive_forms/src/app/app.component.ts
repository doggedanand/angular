import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '19.strictly_typed_reactive_forms';
  myForm!: FormGroup;

  constructor() {



  }
  ngOnInit() {
    this.myForm = new FormGroup<Student>({
      name: new FormControl(''),
      age: new FormControl('')
    })
  }
  onSubmit() {
    console.log(this.myForm.value);

  }
}


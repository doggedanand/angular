import { Component, OnInit } from '@angular/core';
import { TestServiceService } from 'src/app/service/test-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _data: TestServiceService) { }
  usersData = {}
  ngOnInit(): void {
    this._data.fetchData()
      .subscribe(result => { this.usersData = result })
  }
  getData() {

    let user = JSON.stringify(this.usersData)
    document.write(user)
    console.warn("data", user);
  }
}



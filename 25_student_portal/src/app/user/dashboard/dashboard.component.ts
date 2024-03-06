import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { CourseComponent } from '../course/course.component';
import { PaymentComponent } from '../payment/payment.component';
import { ResultComponent } from '../result/result.component';
import { ContactUserComponent } from '../contact-user/contact-user.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayComp!: any;
  selectedOption: string = 'Personal Info';
  constructor() { }

  ngOnInit(): void {
    this.showProfile();
  }
  showProfile() {
    this.selectedOption = 'Personal Info';
    this.displayComp = ProfileComponent;
  }

  showCourse() {
    this.selectedOption = 'Course';
    this.displayComp = CourseComponent;
  }

  showPayment() {
    this.selectedOption = 'Payment';
    this.displayComp = PaymentComponent;
  }

  showResult() {
    this.selectedOption = 'Result';
    this.displayComp = ResultComponent;
  }

  showContactUser() {
    this.selectedOption = 'ContactUser';
    this.displayComp = ContactUserComponent;
  }

}

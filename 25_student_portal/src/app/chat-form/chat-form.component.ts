import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<boolean>();
  hideComp: any;
  chatForm!: FormGroup;
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.chatForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      message: new FormControl()
    })
  }

  public chatUser(val: any):void {
    console.log(val);
    
    this._userService.postChatUser(val).
      subscribe(res => {
        console.log('response by backend', res);

        this.formSubmitted.emit(true);
        console.log('data sended in parent comp')
      })
  }
}

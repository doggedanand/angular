import { Component, OnInit } from '@angular/core';
import { ChatFormComponent } from '../chat-form/chat-form.component';
import { ChatUserComponent } from '../chat-user/chat-user.component';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.css']
})
export class ChatButtonComponent implements OnInit {
  displayComp: any;
  showButtons: boolean = true;
  ChatFComponent = ChatFormComponent;
  constructor() { }

  ngOnInit(): void {

  }
// === load chat form ====
  public chatData(data: any) {
    this.displayComp = ChatUserComponent;
    this.showButtons = false;
  }
// === show contact form ====
  showContactForm() {
    this.displayComp = ChatFormComponent;
    this.showButtons = true;
  }
// === hide contact form ====
  hideContactForm() {
    this.displayComp = null;
    this.showButtons = true;
  }
}

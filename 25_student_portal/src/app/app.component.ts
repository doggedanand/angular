import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ChatFormComponent } from './chat-form/chat-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer!: ViewContainerRef;
  /**
   *
   */
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {


  }

  ngOninit():void{
    this.loadComponent(ChatFormComponent)
  }
  title = '25_student_portal';

  loadComponent(componentType: any) {
    this.dynamicComponentContainer.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
  }
  showChat: boolean = false;
  // formData: any = {};

  toggleChat() {
    this.showChat = !this.showChat;
  }

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:');
    // You can send the form data to your server or perform any other actions
  }
}

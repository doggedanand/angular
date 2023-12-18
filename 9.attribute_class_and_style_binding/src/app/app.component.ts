import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '9.attribute_class_and_style_binding';
  // attribute binding
  imgUrl: string =
    'https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D';
  imgWidth: string = '60%';
  // style binding
  btnClass: string = 'btn btn-danger';
  // class binding
  color: string = 'yellow';
}

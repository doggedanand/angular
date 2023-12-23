import { Component } from '@angular/core';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '17.dependency_injection';
  constructor(private di:TestService){
    
  }
  ngOnInit():void{
    this.di.testDi()
  }
}

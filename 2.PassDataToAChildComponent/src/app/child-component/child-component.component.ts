import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  // templateUrl: `<h2>Child Component</h2>
  // current count is {count}`,
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() count: any;
  // // @Input() count!: number;
  // @Input() count!: number;
}

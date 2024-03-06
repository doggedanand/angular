import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  @ViewChild('top') topElement!: ElementRef;
  @ViewChild('sectionA') secAElement!: ElementRef;
  @ViewChild('sectionB') secBElement!: ElementRef;
  @ViewChild('sectionC') secCElement!: ElementRef;

  displayOption = false;
  constructor() { }

  ngOnInit(): void {
  }
  showHideSwipeBtnOptions() {

    this.displayOption = !this.displayOption;
  }

  scrollToTop() {
    this.topElement.nativeElement.scrollIntoView({ behaviour: 'smooth' });
  }

  secA() {
    this.secAElement.nativeElement.scrollIntoView({ behaviour: 'smooth' });
  }
  secB() {
    this.secBElement.nativeElement.scrollIntoView({ behaviour: 'smooth' });
  }
  secC() {
    this.secCElement.nativeElement.scrollIntoView({ behaviour: 'smooth' });
  }
}

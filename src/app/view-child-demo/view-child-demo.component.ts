import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.css']
})
export class ViewChildDemoComponent implements AfterViewInit {
  @ViewChild('heading') headRef: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.headRef.nativeElement);
    console.log('Heading: ', this.headRef.nativeElement.innerHTML);
   }


}

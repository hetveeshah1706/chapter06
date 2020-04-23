import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-children-demo',
  templateUrl: './view-children-demo.component.html',
  styleUrls: ['./view-children-demo.component.css']
})
export class ViewChildrenDemoComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('heading') headRef: ElementRef;
  @ViewChildren('fruits') listRef: QueryList<ElementRef>;

   ngAfterViewInit() {
     console.log('Heading: ', this.headRef.nativeElement.innerHTML);
     console.log(this.listRef);
     this.listRef.forEach((x) => {
         console.log(x.nativeElement.innerHTML);
   });
  }

}

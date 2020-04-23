import { Component, OnInit, AfterViewInit, AfterContentInit, ContentChildren, QueryList, ContentChild } from '@angular/core';
import { ChildDemoComponent } from '../child-demo/child-demo.component';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.css']
})
export class ParentDemoComponent implements AfterContentInit {

  constructor() { }
  @ContentChildren(ChildDemoComponent) childrenRef: QueryList<ChildDemoComponent>;
  ngAfterContentInit() {
        console.log(this.childrenRef);
        this.childrenRef.forEach((x) => {
             console.log(x);
        });
   }


}

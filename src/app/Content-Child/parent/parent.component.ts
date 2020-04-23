import { Component, OnInit, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterContentInit {

  constructor() { }
  @ContentChild(ChildComponent) child: ChildComponent;

  ngAfterContentInit() {
        console.log('from parent: ', this.child);
  }


}

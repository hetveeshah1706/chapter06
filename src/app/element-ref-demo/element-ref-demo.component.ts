import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-element-ref-demo',
  template:`
  <h1 #h1Style></h1>
`,

  styleUrls: ['./element-ref-demo.component.css']
})
export class ElementRefDemoComponent implements OnInit {
  @ViewChild("h1Style") h1View : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.h1View.nativeElement.innerHTML="Welcome To Angular!!! It Is Demo Of ElementRef!!"
  }

}

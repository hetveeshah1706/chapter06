import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-emulated-child',
  templateUrl: './emulated-child.component.html',
  styleUrls: ['./emulated-child.component.css']
})
export class EmulatedChildComponent implements OnInit {
  @Input() result:string="";
  @Output() clicked=new EventEmitter<string>();
  onClick(searchTerm:string){
    this.clicked.emit(searchTerm);
    }
  constructor() { }

  ngOnInit(): void {
  }

}

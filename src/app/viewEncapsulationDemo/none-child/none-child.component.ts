import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-none-child',
  templateUrl: './none-child.component.html',
  styleUrls: ['./none-child.component.css']
})
export class NoneChildComponent implements OnInit {
  @Input() result:string="";
  @Output() clicked=new EventEmitter<string>();
onClick(searchTerm:string){
  this.clicked.emit(searchTerm);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

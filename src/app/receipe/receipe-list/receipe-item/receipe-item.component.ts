import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent  implements OnInit{
  @Input() receipe: Receipe  = new Receipe('','','')
  @Output() receipeEvent = new EventEmitter<Receipe>();
  constructor() {}
  ngOnInit() {
    
  }

  clickData(receipe: any) {
    this.receipeEvent.emit(receipe)

  }




}

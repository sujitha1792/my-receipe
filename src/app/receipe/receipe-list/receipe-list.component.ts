import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeListService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  // @Output() selectedReceipeEvent = new EventEmitter<Receipe>();
  receipes: Receipe[] | undefined;

  selectedReceipe: Receipe = new Receipe('','','')

  constructor(private receipeListService: ReceipeListService) {}

  ngOnInit() {
    this.receipes = this.receipeListService.getReceipes()
    
  }

  sendReceipeData(receipeDetail:Receipe) {
    this.receipeListService.receipeEvent.emit(this.selectedReceipe);
    // this.selectedReceipe = receipeDetail;
    // this.selectedReceipeEvent.emit(this.selectedReceipe)
  }

}

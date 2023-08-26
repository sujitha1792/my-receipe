import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeListService } from '../receipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  // @Output() selectedReceipeEvent = new EventEmitter<Receipe>();
  receipes: Receipe[] | undefined;

  selectedReceipe: Receipe = new Receipe('','','',[])

  constructor(private receipeListService: ReceipeListService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.receipes = this.receipeListService.getReceipes()
    
  }

  sendReceipeData(receipeDetail:Receipe) {
    this.selectedReceipe = receipeDetail;
    this.receipeListService.receipeEvent.emit(this.selectedReceipe);
    
    // this.selectedReceipeEvent.emit(this.selectedReceipe)
  }


  onNew() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}

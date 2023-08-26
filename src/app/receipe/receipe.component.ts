import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';
import { ReceipeListService } from './receipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css'],
  providers: [ReceipeListService] //only receipe component will have access to this service
})
export class ReceipeComponent implements OnInit {
  constructor(private receipeService: ReceipeListService, private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.receipeService.receipeEvent.subscribe((receipe:Receipe) =>{ this.selectedRecipe = receipe} )
  }
  selectedRecipe:Receipe = new Receipe('','','',[])

}

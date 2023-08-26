import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeListService } from '../receipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {

  constructor(private receipeService: ReceipeListService, private route:ActivatedRoute, private router:Router) {

  }

  receipe: Receipe = new Receipe('', '', '', []);
  id: number = 0;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.receipe = this.receipeService.getReceipe(this.id)
    })
  }

  onAddToShoppingList() {
    this.receipeService.addIngredientsToShoppingList(this.receipe.ingredients)
  }

  onEdit() {
    // Can use both the technique to navigate the code
    this.router.navigate(['edit'], { relativeTo: this.route })
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

}

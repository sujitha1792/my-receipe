import { Component, ElementRef, ViewChild, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription;
  editMode = false;
  editedItemIndex: number = 0;
  editedItem: ingredient | undefined;
  @ViewChild('f')
  slForm!: NgForm;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true
      this.editedItemIndex = index
      this.editedItem = this.shoppingListService.getIngredient(index)
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      }
       
      )
    }) 
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  // @Output() IngredientList = new EventEmitter<{action:string,name:string, amount:number}>();
  // @ViewChild('nameInput') nameInput!: ElementRef;
  // @ViewChild('amountInput') amountInput!: ElementRef;

  onAdd(form: NgForm) {
    const value = form.value
    console.log('vale', value, this.editMode)
    const newIngredient = { name: value.name, amount: value.amount }
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredientService(newIngredient)
    }
    this.editMode = false;
    this.slForm.reset();
    // let name = this.nameInput.nativeElement.value;
    // let amount= this.amountInput.nativeElement.value;
    // this.shoppingListService.addIngredientService({name: name, amount:amount})
    // this.IngredientList.emit({action:'Add', name: name, amount:amount})
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false; 
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear();
  }

}

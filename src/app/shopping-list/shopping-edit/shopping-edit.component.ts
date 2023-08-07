import { Component, ElementRef, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {

  }

  @Output() IngredientList = new EventEmitter<{action:string,name:string, amount:number}>();

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;

  onAdd() {
    let name = this.nameInput.nativeElement.value;
    let amount= this.amountInput.nativeElement.value;
    console.log('entered in add')
    this.IngredientList.emit({action:'Add', name: name, amount:amount})
  }

  onDelete() {
    let name = this.nameInput.nativeElement.value;
    let amount= this.amountInput.nativeElement.value;
    this.IngredientList.emit({action:'Delete', name: name, amount:amount})
  }

}

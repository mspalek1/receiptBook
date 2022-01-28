
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ShopppingListService } from '../shoppig-list.service';

import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef
  //@Output() ingedientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShopppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    //this.ingedientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }

}

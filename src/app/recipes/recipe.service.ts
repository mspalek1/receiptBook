import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShopppingListService } from "../shopping-list/shoppig-list.service";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeWasSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe(
            'Tasty', 
            'This is simply a test', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 200)
            ]
            ),
            new Recipe(
                'Burger', 
                'This is simply a test', 
                'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
                [
                    new Ingredient('Bans', 2),
                    new Ingredient('Meat', 1)
                ]
            ),
      ];
    
      constructor(private slService: ShopppingListService){

      }

      getRecipes(){
          return this.recipes.slice() //new array
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);

      }
}
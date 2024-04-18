import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe';
import { getFromResolvers } from '../../utility';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Input()
  recipes?: Recipe[];

  displayIdeas = false;
}

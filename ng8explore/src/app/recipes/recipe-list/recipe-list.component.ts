import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Name_R1', 'Description_D1', 'https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg'),
    new Recipe('Name_R2', 'Description_D2', 'https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-the-best-broiled-lobster-tail-recipe-10.jpg'),
    new Recipe('Name_R2', 'Description_D2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHQEBsSWwX5mh3njzPZ7jmZcCqTcKKczg5e1ZParyAdmsRM1uO&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

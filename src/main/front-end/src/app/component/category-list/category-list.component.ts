import { Component, OnInit } from '@angular/core';
import {Category} from "../../domain/category";
import {CatergoyService} from "../../service/catergoy.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {


  categories: Category[]= [];

  constructor(private categoryService: CatergoyService) { }

  ngOnInit() {

    this.categoryService.getCategories()
      .subscribe(
        (categories: Category[]) =>{
          console.log(categories)
          this.categories =categories
        },
        (error) => console.log(error)
      );
  }

}

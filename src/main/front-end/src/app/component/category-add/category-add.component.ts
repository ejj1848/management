import { Component, OnInit } from '@angular/core';
import {CatergoyService} from "../../service/catergoy.service";
import {Category} from "../../domain/category";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  category: Category ={
    categoryName:''
  };

  constructor(private categoryService: CatergoyService) { }

  ngOnInit() {
  }

  onCategorySubmit(){
    this.categoryService.addCategory(this.category);
  }
}

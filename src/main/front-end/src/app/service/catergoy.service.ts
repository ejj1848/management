import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../domain/category";

@Injectable()
export class CatergoyService {

  private url = '/api/category/';

  constructor(private  http: HttpClient) { }

  ngOnInit(){

  }

  addCategory(category: Category){
    return this.http.post(this.url, category).subscribe();
  }


  getCategories(){
    return this.http.get(this.url);
  }
}

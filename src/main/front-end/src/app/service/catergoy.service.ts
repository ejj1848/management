import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CatergoyService {

  private url = '/api/category/';

  constructor(private  http: HttpClient) { }


  getCategories(){
    return this.http.get(this.url);
  }
}

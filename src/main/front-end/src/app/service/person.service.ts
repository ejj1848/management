import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PersonService {

  private url = '/api/person/'

  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get(this.url);
  }

}

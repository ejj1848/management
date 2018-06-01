import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../domain/person";

@Injectable()
export class PersonService {

  onPersonAdded = new EventEmitter<Person>();


  private url = '/api/person/';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  getPeople() {
    return this.http.get(this.url);
  }

  addPerson(person: Person) {
    console.log(person);
    return this.http.post(this.url, person)
  }

}

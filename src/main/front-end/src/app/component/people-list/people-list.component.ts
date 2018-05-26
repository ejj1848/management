import { Component, OnInit } from '@angular/core';
import {Person} from "../../domain/person";
import {PersonService} from "../../service/person.service";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList: Person[] = [];
  constructor(private personService: PersonService) { }

  ngOnInit() {

    this.personService.getPeople()
      .subscribe((people: Person[]) =>{
        this.peopleList = people
      },
        (error) => console.log(error));
  }

}

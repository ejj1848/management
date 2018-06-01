import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../service/person.service";
import {Person} from "../../domain/person";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {


  person: Person ={
    name:''
  };

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  onPersonSubmit(){
    this.personService.addPerson(this.person)
      .subscribe()

  }


}

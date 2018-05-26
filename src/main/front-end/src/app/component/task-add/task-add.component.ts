import {Component, OnInit} from '@angular/core';
import {Task} from "../../domain/task";
import {TaskService} from "../../service/task.service";
import {Person} from "../../domain/person";
import {Category} from "../../domain/category";
import {CatergoyService} from "../../service/catergoy.service";
import {PersonService} from "../../service/person.service";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  categories: Category[] = [];
  peopleList: Person[] = [];
  selectedCat: Category = {};
  selectedPerson: Person ={};

  task: Task = {
    description: '',
    dateCompleted: '',
    dueDate: null,
    isCompleted: null,
    people: [this.selectedPerson],
    category: this.selectedCat
  };

  constructor(private taskService: TaskService , private categoryService: CatergoyService, private personService: PersonService) {

  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((res : Category[]) => this.categories = res);
    this.personService.getPeople().subscribe((res: Person[]) => this.peopleList = res);
  }

  onSubmit() {

    this.task.people = [this.selectedPerson];
    this.task.category = this.selectedCat;
    this.taskService.addTask(this.task)
      .subscribe(
        (newTask: Task) => {
          this.taskService.onTaskAdded.emit(newTask)
        }
      )


  }

}

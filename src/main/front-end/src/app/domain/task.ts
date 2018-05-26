import {Person} from "./person";
import {Category} from "./category";


export class Task {


  public id ?: number;
  public description ?: string;
  public dateCompleted?: string;
  public dueDate ?: string;
  public isCompleted ?: boolean;
  public people ?: Person[];
  public category ?: Category;

  constructor( description: string, dateCompleted: string, dueDate: string, isCompleted: boolean, people: Person[], category: Category) {

    this.description = description;
    this.dateCompleted = dateCompleted;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted;
    this.people = people;
    this.category = category;
  }

}

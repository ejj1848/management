import "rxjs/Rx";
import {EventEmitter, Injectable} from "@angular/core";
import {Task} from "../domain/task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class TaskService {

  onTaskAdded = new EventEmitter<Task>();

  tasks: Task[] = [];

  private url = '/api/task/';

  constructor(private http: HttpClient) {
  }

  getTasks() {

    return this.http.get(this.url);

  }

  getSingleTask(id: number) {
    return this.http.get(this.url + id);
  }


  addTask(task: Task) {

    return this.http.post(this.url, task)

  }

  saveTask(task: Task, checked: boolean) {
    // we are updating the task to what the value of checked is
    if (checked) {
      task.isCompleted = true;
      task.dateCompleted = this.getTodayAsString();
    }
    else {
      task.isCompleted = false;
      task.dateCompleted = null;
    }

    return this.http.post(this.url, task)


  }

  searchTasksByPerson(term: string): Observable<Task[]> {
    if (!term.trim()) {
      // if not search term, return empty task array.
      return of([]);
    }

    return this.http.get<Task[]>(this.url + "/person/" + term);

  }

  searchTasksByCategory(categoryTerm: string): Observable<any> {
    if (!categoryTerm.trim()) {
      // if not search term, return empty task array.
      return of([]);
    }

    return this.http.get(this.url + "/category/" + categoryTerm);

  }


  getTodayAsString() {
    let today = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    return mm + '/' + dd + '/' + yyyy;
  }
}

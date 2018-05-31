import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {TaskService} from "../../service/task.service";
import {Task} from "../../domain/task";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {


  tasks$: Observable<Task[]>;

  private searchTerms = new Subject<string>();


  constructor(private taskService: TaskService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {

    this.tasks$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.taskService.searchTasksByPerson(term))
    )
  }

  getDueDateLabel(task: Task){
    return task.isCompleted ? 'badge-success' : 'badge-primary';
  }

  onTaskChange(event, task) {
    console.log(task);
    this.taskService.saveTask(task,event.target.checked).subscribe();
  }

}

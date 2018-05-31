import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Task} from "../../domain/task";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {TaskService} from "../../service/task.service";
import {Observable} from "rxjs/Observable";
import {TaskListComponent} from "../task-list/task-list.component";

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent implements OnInit {

  categoryTasks$: Observable<Task[]>;

  private categorySearchTerms = new Subject<string>();


  constructor(private taskService: TaskService) { }

  categorySearch(categoryTerm: string): void {
    console.log(categoryTerm)
    this.categorySearchTerms.next(categoryTerm);
  }

  ngOnInit() {


    this.categoryTasks$ = this.categorySearchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((categoryTerm: string) => this.taskService.searchTasksByCategory(categoryTerm))
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

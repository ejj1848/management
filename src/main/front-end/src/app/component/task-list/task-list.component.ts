import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../service/task.service";
import {Task} from "../../domain/task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
    // initial load of data
    this.taskService.getTasks()
      .subscribe(
        (tasks: Task[]) => {
          this.tasks = tasks

          console.log(this.tasks)
        },
        (error) => console.log(error)
      );
    // get notified when a new task has been added
    this.taskService.onTaskAdded.subscribe(
      (task: Task) => this.tasks.push(task)
    );
  }

  getDueDateLabel(task: Task) {
    return task.isCompleted ? 'badge-success' : 'badge-primary';
  }

  onTaskChange(event, task) {
    console.log(task);
    this.taskService.saveTask(task, event.target.checked).subscribe();
  }
}

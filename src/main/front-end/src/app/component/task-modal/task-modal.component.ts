import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  getTask( id: number){
    return this.taskService.getSingleTask(id)
  }

}

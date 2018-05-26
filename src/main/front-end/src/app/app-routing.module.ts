import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskComponent} from "./component/task/task.component";
import {TaskListComponent} from "./component/task-list/task-list.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'tasks', component: TaskListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

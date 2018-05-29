import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from "./component/task/task.component";
import {TaskListComponent} from "./component/task-list/task-list.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {TaskAddComponent} from "./component/task-add/task-add.component";


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addTask', component: TaskAddComponent},
  {path: 'task/:id', component: TaskComponent},
  {path: 'tasks', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

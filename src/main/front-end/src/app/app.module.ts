import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TaskComponent} from './component/task/task.component';
import {TaskAddComponent} from './component/task-add/task-add.component';
import {TaskListComponent} from './component/task-list/task-list.component';
import {TaskService} from "./service/task.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CategoryComponent } from './component/category/category.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { PeopleListComponent } from './component/people-list/people-list.component';
import {PersonService} from "./service/person.service";
import {CatergoyService} from "./service/catergoy.service";
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TaskSearchComponent } from './component/task-search/task-search.component';
import { CategorySearchComponent } from './component/category-search/category-search.component';
import { PersonAddComponent } from './component/person-add/person-add.component';
import { CategoryAddComponent } from './component/category-add/category-add.component';
import { TaskModalComponent } from './component/task-modal/task-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskAddComponent,
    TaskListComponent,
    CategoryComponent,
    CategoryListComponent,
    PeopleListComponent,
    DashboardComponent,
    TaskSearchComponent,
    CategorySearchComponent,
    PersonAddComponent,
    CategoryAddComponent,
    TaskModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [TaskService, PersonService, CatergoyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

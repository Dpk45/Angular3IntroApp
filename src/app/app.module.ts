import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {CourseService} from './course.service';
import {AuthorsService} from './authors.service';
import {AutoGrowDirective} from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,CoursesComponent,AuthorsComponent,AutoGrowDirective],
  providers:    [CourseService,AuthorsService],
  bootstrap:    [ AppComponent ]
  
})

export class AppModule { }









import { Component } from '@angular/core';
import {CourseService} from './course.service'

@Component({
	selector:'courses',
	template:
	`
	<h2>deepak</h2>
    {{ title }}
<input type="text" autoGrow />

    <ul>
         <li >
             {{ course }}
         </li>
    </ul>

	`
})

export class CoursesComponent{
	title="the title of courses page";
    course:String[];

constructor(courseService:CourseService){
this.course=courseService.getCourse();

}


}


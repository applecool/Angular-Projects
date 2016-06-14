import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
//{{}} - interpolation- binding the component with the view. In this case it is a one way binding.
//*ngFor - it is a default directive which is used as an iterator! #course is the way to declare a local variable.
// of - is a keyword
@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{title}}
    <input type="text" autoGrow />
    <ul>
       <li *ngFor="#course of courses">
       {{course}}
       </li>
    </ul>`,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
 export class CoursesComponent{
     title: string = "The title of courses page";
     courses;

     //dependency injection
     constructor(courseService: CourseService){
         this.courses = courseService.getCourses();
     }
 }
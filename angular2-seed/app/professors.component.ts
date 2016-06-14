// Step3:An import statement to corroborate with the Component created
import {Component} from 'angular2/core';
import {ProfessorService} from './professor.service'
// Step2:A component decorator function which should contain a selector and a template
@Component({
    //step 4:selector and template
    //step 5: use interpolation - binding the component with the view
    selector: 'professors',
    template:`<h2>Professors</h2>
    {{title}}
    <ul>
    <li *ngFor="#professor of professors">
    {{professor}}
    </li>
    </ul>`,
    providers: [ProfessorService]

})
// step1: a plain empty typescript class created
export class ProfessorsComponent{
    title: string = 'The title of the professors';
    //professors= ["prof1","prof2","prof3"]; //hardcoding - this is wrong! We need to pull everything dynamically! So, lets write a service!
    professors: string[];

    constructor (professorService: ProfessorService){
        this.professors = professorService.getProf();
    }
}
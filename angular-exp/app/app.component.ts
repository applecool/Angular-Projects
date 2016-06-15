import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe';
@Component({
    selector: 'my-app',
    template: `
    <h1> Details of the Project - High Profile</h1>
    {{project.title| uppercase}}
    <br/>
    {{project.rating|number:'2.2-2'}}
    <br/>
    {{project.team| number}}
    <br/>
    {{project.price| currency:'INR'}}
    <br/>
    {{project.releaseDate| date: 'year'}}
    <br/>
    {{project| json}}
    <br/>
    {{post.title}}
    <br/>
    {{post.body|summary}}
    `,
    pipes: [SummaryPipe]
})
export class AppComponent {
    some: boolean;
    project = {
        title: "Angular 2 for Insights",
        rating: 4.9324,
        team: 11111,
        price: 100.9,
        releaseDate: new Date(2016, 3, 1)
    }
    post ={
        title: "Insights is Awesome",
        body: `
            It changes the way we look at data. Used technologies are Angular 2, TypeScript, SASS and Java with gulp bindings. It is a platform which allows you to ask the data questions.        
        `
    }
 }
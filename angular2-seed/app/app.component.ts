import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {ProfessorsComponent} from './professors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoteComponent} from './vote.component'
//this is a fucnction which we are calling it which has a selector and a template!
@Component({
    selector: 'my-app',
    template: `<h1>Bonjour Angular mon ami!</h1>
    <courses></courses>
    <professors></professors>
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    <favorite></favorite>
    <like></like>
    <voter
        [voteCount]="post.voteCount"
        [myVote]="post.myVote"
        (vote)="onVote($event)"
    >
    </voter>
`,
    directives: [CoursesComponent, ProfessorsComponent, FavoriteComponent, LikeComponent, VoteComponent]
})

// This is the root view component!
export class AppComponent { 
    post = {
        title:"Title",
        isFavorite: true,
        voteCount: 10,
        myVote: 0
    };

    onFavoriteChange($event){
        console.log($event);
    }

    onVote($event){
        console.log($event);
    }
}
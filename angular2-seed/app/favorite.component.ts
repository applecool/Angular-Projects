import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
        .glyphicon-star{
            color: orange;
        }
    `]
    //inputs: ['isFavorite'] this is one more style of declaring the input
    //outputs: ['change'] this is one more style of declaring the output
})

export class FavoriteComponent{
    @Input() isFavorite = false; //one style of declaring the inputs
    
    @Output() change = new EventEmitter(); //this is a private property, to use it outside, we have to use the output() property

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}

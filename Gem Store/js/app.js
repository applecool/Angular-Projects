
//wrapping up javaScript in a closure is a good habit
(function(){
var app = angular.module('gemStore', [ ]); //the string gemStore should be matched exactly with the name of the ng-app in the html

    app.controller('StoreController', function(){
        this.product = gem;
    });
    
    var gem = {
        name: 'Dodecahedron',
        price: 2.99,
        description: 'This gem is mindblowing and sparkling! You cant take your eyes off it.',
    };
})();

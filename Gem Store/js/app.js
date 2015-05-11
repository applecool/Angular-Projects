
//wrapping up javaScript in a closure is a good habit
(function(){
var app = angular.module('gemStore', [ ]); //the string gemStore should be matched exactly with the name of the ng-app in the html

    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    var gems = [
        
        {
        name: 'Pentagonal Gem',
        price: 2000.99,
        description: 'This gem is very rare and contains full of magic! Only a worthy person can use it',
        canPurchase: true,
        soldOut: false,
        },
        
        {
        name: 'Azurite',
        price: 2222.99,
        description: 'This gem is extracted from the rare species of shell animal pokemon Azurill, a water pokemon.',
        canPurchase: true,
        soldOut: false,
        },
        
        {
        name: 'Dodecahedron',
        price: 1299.99,
        description: 'This gem is mindblowing and sparkling! You cant take your eyes off it.',
        canPurchase: true,
        soldOut: false,
        },
    ];
})();

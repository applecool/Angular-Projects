
//wrapping up javaScript in a closure is a good habit
(function(){
var app = angular.module('gemStore', [ ]); //the string gemStore should be matched exactly with the name of the ng-app in the html

    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    app.controller('TabController', function(){
        this.tab = 1;
        
        this.setTab = function(value){
            this.setTab = value;
        };
        
        this.isSet = function(tabName){
            return this.tab === tabName;
        };
    });
    
    var gems = [
        
        {
        name: 'Pentagonal Gem',
        price: 2000.99,
        description: 'This gem is very rare and contains full of magic! Only a worthy person can use it',
        shine: 9,
        rarity: 10,
        color: '#EEE',
        faces: 7,
        canPurchase: true,
        soldOut: false,
        images:[
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        },
        
        {
        name: 'Azurite',
        price: 2222.99,
        description: 'This gem is extracted from the rare species of shell animal pokemon Azurill, a water pokemon.',
        canPurchase: true,
        shine: 8,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        soldOut: false,
        images:[
            "images/gem-01.gif",
            "images/gem-03.gif",
            "images/gem-04.gif"
        ],
        },
        
        {
        name: 'Dodecahedron',
        price: 1299.99,
        description: 'This gem is mindblowing and sparkling! You cant take your eyes off it.',
        canPurchase: true,
        shine: 7,
        rarity: 7,
        color: '#000',
        faces: 12,    
        soldOut: false,
        images:[
            "images/gem-06.gif",
            "images/gem-07.gif",
            "images/gem-08.gif"
        ],
        },
    ];
})();

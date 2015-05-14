
//wrapping up javaScript in a closure is a good habit
(function(){
var app = angular.module('gemStore', [ ]); //the string gemStore should be matched exactly with the name of the ng-app in the html

    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    app.controller('TabController', function(){
        this.tab = 1;
        
        this.setTab = function(value){
            this.tab = value;
        };
        
        this.isSet = function(tabName){
            return this.tab === tabName;
        };
    });
    
    app.controller('GalleryController', function(){
        this.current = 0;
        
        this.setCurrent = function(value){
            this.current = value || 0;
        };
    });
    
    app.controller('ReviewController',function(){
        this.review = {};
        
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {}; // resets/clears the form
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
        reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
        }, 
        {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
        }]
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
        reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
        }, 
        {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
        }, 
        {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
        }]    
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
        reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
        }, 
        {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
        }]
        },
    ];
})();

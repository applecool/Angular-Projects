(function() {
  var app = angular.module('store-products', []);
  //directive for productTitle
  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });
  //directive for productDescription
  app.directive('productDescription', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });
  //directive for productSpecs
  app.directive('productSpecs', function() {
    return {
      restrict: 'A',
      templateUrl: 'product-specs.html'
    };
  });
  //directive for productReviews
  app.directive('productReviews', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-reviews.html'
    };
  });
  //directive for productTabs
  app.directive('productTabs', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller: function() {
        this.tab = 1;

        this.setTab = function(value) {
          this.tab = value;
        };

        this.isSet = function(activeTab) {
          return this.tab === activeTab;
        };
      },
      controllerAs: 'Tab'
    };
  });
  //directive for productGallery
  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function() {
        this.current = 0;

        this.setCurrent = function(value) {
          this.current = value || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

})();

'use strict';
  
// Register the "navbarDefault" component, along with its associated controller and template
angular.
  module('navbarDefault').
  component('navbarDefault', {
    templateUrl: 'app/components/navbar/navbar.template.html',
    controller: ['$http', '$routeParams',
      function navbarDefaultController($http, $routeParams) {
        var self = this;

        $http.get('app/components/navbar/navbar.json').then(function(response) {
          self.navbar = response.data;
        });
      }
    ]
});
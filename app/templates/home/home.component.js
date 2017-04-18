'use strict';

// Register "homePage" component, along with its associated controller and template
angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'app/templates/home/home.template.html',
    controller: ['$http', '$routeParams',
      function homePageController($http, $routeParams) {
        var self = this;

        $http.get('app/templates/home/home.json').then(function(response) {
          self.homedata = response.data;
        });
      }
    ]
});
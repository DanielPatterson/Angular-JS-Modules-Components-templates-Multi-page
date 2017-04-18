'use strict';

// Register "introPage" component, along with its associated controller and template
angular.
  module('introPage').
  component('introPage', {
    templateUrl: 'app/templates/intro/intro.template.html',
    controller: ['$http', '$routeParams',
      function homePageController($http, $routeParams) {
        var self = this;

        $http.get('app/templates/intro/intro.json').then(function(response) {
          self.introdata = response.data;
        });
      }
    ]
});
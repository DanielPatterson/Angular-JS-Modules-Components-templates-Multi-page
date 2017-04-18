'use strict';

angular.
  module('myApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        
		when('/', {
          template: '<home-page></home-page>'
        }).
		when('/:pageId', {
          template: '<intro-page></intro-page>'
        }).
        otherwise('/');
    }
]);
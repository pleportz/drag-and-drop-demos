'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.drag-and-drop',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/drag-and-drop'});
}]);

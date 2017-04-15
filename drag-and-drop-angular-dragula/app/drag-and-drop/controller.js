'use strict';

angular.module('myApp.drag-and-drop', ['ngRoute', angularDragula(angular)])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/drag-and-drop', {
    templateUrl: 'drag-and-drop/view.html',
    controller: 'DragAndDropCtrl'
  });
}])
.controller('DragAndDropCtrl', DragAndDropCtrl);

DragAndDropCtrl.$inject = ['$scope'];
function DragAndDropCtrl($scope) {

  $scope.letters = ["S", "M", "I", "L", "E"];

}

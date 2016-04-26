angular
  .module('myApp.controllers', [])
  .controller('todoListController', todoListController);

function todoListController($scope, todoListService) {
  todoListService.getAll()
    .then(function(todos) {
      $scope.todos = todos.data;
    });
}

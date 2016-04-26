angular
  .module('myApp.services', [])
  .service('todoListService', todoListService);

function todoListService($http) {
  return {
    getAll: function() {
      return $http.get('https://ancient-reaches-80028.herokuapp.com/api/v1/todos');
    }
  };
}
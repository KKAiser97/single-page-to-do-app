const app = angular.module('app.todos', [])

app.controller('todoController', [`$scope`, function($scope){
    $scope.appName = 'Node JS TODO Web'
    $scope.formData = {}
    $scope.todos = [
        {
            title: "1",
            isDone: true
        }, {
            title: '2',
            isDone: false
        }
    ]
    $scope.createTodo = function(){
        // console.log($scope.formData)
        var todo = {
            title: $scope.formData.title,
            isDone: false
        }
        $scope.todos.push(todo);
        $scope.formData.title ='';
    }
    $scope.updateTodo = function(todo){

    }
    $scope.delTodo = function(todo){
        
    }
}])
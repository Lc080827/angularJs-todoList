var app = angular.module('myapp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'html/todoList.html',
            controller:'todoListController'
        });
}]);

app.controller("todoListController",function($scope){
    //添加信息
    $scope.todoList = [];
    $scope.add = function(){
        $scope.todoList.push({text:$scope.text});
        $scope.text = "";
    }
    //删除信息
    $scope.delete = function(index){
        $scope.todoList.splice(index,1);
    }
    //完成信息
    $scope.todoList1 = [];
    $scope.done = function(index){
        var todo = $scope.todoList.splice(index,1)[0];
        $scope.todoList1.push(todo);
    }
    //撤销完成
    $scope.undone = function(index){
        var todo = $scope.todoList1.splice(index,1)[0];
        $scope.todoList.push(todo);
    }
});
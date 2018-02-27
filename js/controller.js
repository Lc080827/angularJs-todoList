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
});
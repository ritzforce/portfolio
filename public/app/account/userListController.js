var bookApp = angular.module("bookApp");

bookApp.controller("userListCtrl",function($scope,User){
    $scope.users = User.query();
});
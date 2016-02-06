var bookApp = angular.module("bookApp");

bookApp.controller("mainCtrl",function($scope){
    $scope.hello = "world";
    
    $scope.courses = [
        {name:"JDC Library",featured : true},
        {name:"Mortgage App",featured : false,new : true},
        {name:"JDC Library Angular Mean Stack",featured : true},
        {name:"Mortgage App JS Force and Postgres",featured : false,new : true}
    ] 
});
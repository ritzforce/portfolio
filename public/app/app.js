var bookApp = angular.module("bookApp", ['ngResource', 'ngRoute']);

bookApp.config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    var routeCheck = {
        admin: {
            auth: function (authService) {
                return authService.authorizeForRoute("admin");
            }
        }
    }

    $routeProvider
        .when("/", {
            templateUrl: "/partials/main/main",
            controller: "mainCtrl"
        })
        .when("/admin/users", {
            templateUrl: "/partials/account/userList",
            controller: "userListCtrl",
            resolve: routeCheck.admin
        });

});

bookApp.run(function($rootScope,$location){
    $rootScope.$on("$routeChangeError",function(event,current,previous,rejectReason){
        if(rejectReason === "Not Authorized"){
            $location.path("/");
        }
    })
});



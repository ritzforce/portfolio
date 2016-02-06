var bookApp = angular.module("bookApp");

bookApp.controller("loginController", function ($scope, $location, authService, identity, notifier) {
    $scope.identity = identity;

    $scope.signIn = function (username, password) {
        authService.login(username, password).success(function (response) {
            if (identity.isAuthenticated()) {
                notifier.notify("Successful in Loggin");
            }
        });
    }

    $scope.signOut = function () {

        authService.logout().success(function (response) {
            $scope.username = "";
            $scope.password = "";
            notifier.notify("You have been logged out ");
            $location.path("/");
        })


    }

});
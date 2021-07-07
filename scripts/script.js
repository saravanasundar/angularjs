//method chaining to create module and controller

var myApp = angular
            .module('myModule', [])
            .controller('myController', function ($scope) {
                $scope.message = "Angular js tutorial";
            });
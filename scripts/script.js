//method chaining to create module and controller

var myApp = angular
            .module('myModule', [])
            .controller('myController', function ($scope) {
                var technologies = [
                    {
                        name: "Angular",
                        like: 0
                    },
                    {
                        name: "React",
                        like: 0
                    }
                ]
                $scope.technologies = technologies;
                $scope.incLike = function (technology) {
                    technology.like++;
                }
                $scope.decLike = function (technology) {
                    if(technology.like > 0)
                        technology.like -= 1;
                }
            });
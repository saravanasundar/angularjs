//method chaining to create module and controller

var myApp = angular
            .module('myModule', [])
            .controller('myController', function ($scope) {
                var countries = [
                    {
                        name: "India",
                        cities: ['Chennai', "Hydredabad", "Bangalore"]
                    },
                    {
                        name: "USA",
                        cities: ['New york', "Texas"]
                    }
                ]
                $scope.countries = countries;
            });